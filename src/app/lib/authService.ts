"use server"

import AuthError from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
import { encrypt } from "@/app/lib/sessionService"; // Assuming you have an encryption module

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
        const credential = {username: formData.get('username') as string, password: formData.get('password') as string};
        const data = await login(credential);
        if (!data) return "Invalid credentials.";
        redirect("/product");
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

export async function login(credentials: { username: string, password: string }) {
  const parsedCredentials = z
    .object({ username: z.string(), password: z.string().min(6) })
    .safeParse(credentials);

  if (parsedCredentials.success) {
    const { username, password } = parsedCredentials.data;
    const data = await authenticateUser({ username, password });
    if (!data) return null;

    const all_data = { "token": data.access_token, };
    const session = await cookies();
    const encryptedToken = await encrypt(data.token);
    session.set("token", encryptedToken);

    redirect("/product");
    return all_data;
  } else {
    console.error('Invalid credentials format');
    return null;
  }
}

export const authenticateUser = async ({ username, password }: { username: string, password: string }) => {
  try {
    const LOGIN_URL = `${process.env.AUTH_URL_API}`;
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
    throw error;
  }
};

export const loginWithValidation = async (credentials: { username: string, password: string }) => {
  const parsedCredentials = z
    .object({ username: z.string(), password: z.string().min(6) })
    .safeParse(credentials);

  if (parsedCredentials.success) {
    const { username, password } = parsedCredentials.data;
    const data = await authenticateUser({ username, password });
    if (!data) return null;

    const all_data = { "token": data.token, "name": "Boubacar", "email": "ladialloboubacar@gmail.com" };
    const session = await cookies();
    const encryptedToken = await encrypt(data.token);
    session.set("token", encryptedToken);

    return all_data;
  } else {
    console.error('Invalid credentials format');
    return null;
  }
};

