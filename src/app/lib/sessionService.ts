import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = "KRyMEGn5wYHjNFaahYkm6IkzFRij9BlmBk68elSbXbs=";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(data: string) {
    return await new SignJWT({data})
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}

export async function decrypt(token: string) {
    const { payload } = await jwtVerify(token, key, { algorithms: ["HS256"] });
    return payload;
}

export async function getToken() {
    const session = await cookies();
    const token = session.get("token");
    if (!token) {
        return null;
    }
    const decriptToken = await decrypt(token.value);
    return decriptToken;
}
