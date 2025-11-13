import { found_memes } from "./types"

const serverAddress: string = "https://vaultofmemes.duckdns.org"
var userId: number | null = null

export function setUserId(id: number) {
    userId = id;
}

export async function getAllMemes(): Promise<found_memes> {
    console.log("Getting all resources")
    const url = `${serverAddress}/user/images?user_id=${userId}`
    console.log(`Fetching URL ${serverAddress}`)
    const r = await fetch(url, { method: "GET" });
    return await r.json();
}

export async function deleteMeme(tgId: string): Promise<void> {
    const url = `${serverAddress}/image/delete?user_id=${userId}&tg_file_id=${tgId}`
    await fetch(url, { method: "DELETE" });
}

export async function updateMeme(tgId: string, tags: string[]): Promise<void> {
    const url = `${serverAddress}/image/tags?user_id=${userId}&tg_file_id=${tgId}`
    await fetch(url, { method: "PUT", body: JSON.stringify({ tags: tags }) });
}

export function getImage(tgId: string): string {
    if (userId === null) throw "User is null";
    const url = `${serverAddress}/image/${tgId}`
    return url
}
