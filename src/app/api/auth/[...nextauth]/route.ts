import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
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
                    authenticate(email: $email, password: $password)
                }
                  `,
                  variables: {email, password}
                }),
              });

            const { data } = await response.json();  
                         

            if (data && data.authenticate !== null) {
              const token = data.authenticate;
      
              // Return the user object with the JWT token
              return { token, email };
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
    
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

