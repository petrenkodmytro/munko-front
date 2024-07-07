import NextAuth from "next-auth"
import { CustomUser } from "./types";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {

  interface User {
    data?:{
      user: User,
      token: string
    },
    token?: string,
    id: string;
    firstName: string;
    lastName?: string | null;
    email: string;
    phone?: number | null;
    password: string;
    address?: {
      id: number;
      userId: number;
      locality: string;
      postOffice: string;
    } | null;
    orders?: string[] | null;
    role?: string;
  };

  interface Session {
    token: string;
    user: User;
    tokenExpires: number;
  };
};

declare module "next-auth/jwt" {

  interface JWT {
    accessToken: string,
    user: User,
    exp: number
  }
};