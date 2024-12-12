

import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";
import NextAuth, { DefaultSession } from "next-auth";
import { cookies } from "next/headers";
import { encrypt } from "@/app/lib/sessionService";


declare module 'next-auth' {
  interface Session {
    user: {

      name?: string;
      token?: string;
      email?: string;
    }& DefaultSession["user"];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const data = await authenticateUser({ username: username, password: password });
          const all_data = { "token": data.token,"name":"Boubacar","email":"ladialloboubacar@gmail.com" };
          const session = await cookies();
          const encreptToken = await  encrypt(data.token);
          session.set("token", encreptToken);
          
          if (!data) return null;
          return all_data;
        }
        return null;
      },
    }),
  ],
  callbacks: {
   
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      // const isOnDashboard = nextUrl.pathname.startsWith('/product');
      if (isLoggedIn)
      return Response.redirect(new URL('/product', nextUrl));

      return false;
    },
    
  },
});

export const authenticateUser = async ({ username, password }: { username: string, password: string }) => {

  try {
    const LOGIN_URL = `${process.env.NEXT_PUBLIC_API_URL}/user/login`;
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username": username,
        "password": password
      })
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Erreur de connexion 2');
      return null;
    }
  } catch (error) {
    console.error('Erreur de connexion 3:', error);
    throw (error);
  }
};

