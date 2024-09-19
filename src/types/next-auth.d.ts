import NextAuth from "next-auth"
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
      countryCode: string;
      district: string;
      city: string;
      street: string;
      house: string;
      postalCode: string;
    } | null;
    creditCard?: {
      id: number;
      creditCard: string;
  }
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