

/**
 * Appelle une API externe de manière sécurisée en ajoutant un token d'authentification.
 * 
 * @param {string} url - L'URL de l'API externe.
 * @param {RequestInit} options - Les options de la requête fetch.
 * @returns {Promise<any>} - La réponse de l'API en format JSON.
 * 
 * @example
 * const data = await callApiSecure('https://api.example.com/data', {
 *   method: 'GET',
 *   headers: {
 *     'Content-Type': 'application/json'
 *   }
 * });
 */

import { getToken } from "@/app/lib/sessionService";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export async function callApiSecure(url: string, options: RequestInit) {
    const token = await getToken();
    try {
        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        };
        const response = await fetch(url, options);

        if (!response.ok) {
            if (response.status === 401) {
                redirect("/login");
                return;
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error calling external API:', error);
        throw error;
    }
}
export async function session() {
    const session = await auth();
    
    return session;  
}




