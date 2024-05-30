import { NextAuthOptions, Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@/types/types";
import { JWT } from "next-auth/jwt";
import { googleLoginUser } from "./api";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
            email: string;
            password: string;
          };
        try {
              const response = await fetch('https://funkopop.onrender.com/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  query: `
                  query Authenticate($email: String!, $password: String!) {
                    authenticate(email: $email, password: $password) {
                      token
                      user {
                        id
                        firstName
                        lastName
                        email
                        phone
                      }
                    }
                }
                  `,
                  variables: {email, password}
                }),
              });

            const { data } = await response.json();  
                         

            if (data && data.authenticate !== null) {
              const user: User = data.authenticate.user;
              const token: string = data.authenticate.token;
              user.token = token;                  
      
              // Return the user object with the JWT token
              return user;
            } else {
              return null; // Return null if authentication fails
            }
        }
        catch (error) {
            console.error('Authentication error:', error);
            return null; // Return null if an error occurs
        }
      }
      
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID??"",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET??""
    })
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account }: { user: any; account: any }) {
      if(!account){
        return false
      }
      if (account.provider === "google") {
          user.data = await googleLoginUser(account.id_token, account.providerAccountId); 
        return true;
        }
    return true
      },
    
    async jwt({ token, user }: {token: JWT; user: any}) {  
      
      if(user && user.token) {
        token.accessToken = user.token;
        delete user.token
        token.user = user
      }

      if(user && user.data){
        token.accessToken = user.data.token;
        token.user = user.data.user;
      }        
      return token;
    },

    async session({ session, token }: { session: Session; token: any;}) {      
      if (session && token.accessToken) {
        session.token = token.accessToken
        session.user = token.user
        return session;        
      } else {
        session.user = token.user
        session.token = token.user.token
        return session
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

export default authOptions


