import NextAuth, { User } from "next-auth"
import { CustomUser } from "./types";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {

  interface Session {
    token: string;
    user: CustomUser | User;
  };

  interface User {
    data?:{
      user:CustomUser,
      token: string
    },
    token?: string,
  };
};

declare module "next-auth/jwt" {

  interface JWT {
    accessToken: string,
    user: CustomUser | User
  }
};