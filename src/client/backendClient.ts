import { meme, found_memes } from "./types"

// const serverAddress: string = "http://localhost"
// const tempId: number = 1949941483

// export function getAllMemes() {
//     const url = `${serverAddress}/images?user_id=${tempId}`
//     const body = { "tags": ["debile"] }
//     return fetch(url, { method: "POST", body: JSON.stringify(body) })
// }

const loadTime = 1000;

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var memes: meme[] = [
    { id: 1, type: "image", file_id: "id", tags: ["skibo", "dibo", "long long tag", "uuuuuu scary", "overflow testing here"], image_url: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" },
    { id: 2, type: "image", file_id: "id", tags: ["skibo", "dibo"], image_url: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" },
    { id: 3, type: "image", file_id: "id", tags: ["skibo", "dibo", "bibo"], image_url: "https://www.aaha.org/wp-content/uploads/2024/09/kitten-lying-in-blanket.jpg" },
    { id: 4, type: "image", file_id: "id", tags: ["dibo", "biba", "bibo"], image_url: "https://www.scottishspca.org/wp-content/uploads/2024/09/CATS-INVERNESS-JUNE-24-13-1369x913.jpg" },
    { id: 5, type: "image", file_id: "id", tags: ["dibo", "biba"], image_url: "https://www.scottishspca.org/wp-content/uploads/2024/09/CATS-INVERNESS-JUNE-24-13-1369x913.jpg" },
    { id: 6, type: "image", file_id: "id", tags: ["skibo", "ocaml"], image_url: "https://www.scottishspca.org/wp-content/uploads/2024/09/CATS-INVERNESS-JUNE-24-13-1369x913.jpg" },
    { id: 7, type: "gif", file_id: "id", tags: ["gif", "spiral"], image_url: "https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyNHJsdTIzanc2aTVzOGZsbzY0dGU4dXh2MWg3bWt5eWZrNzRhNTNwcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3ohhwFhUCOXOJfuttC/200.gif" },
    { id: 8, type: "gif", file_id: "id", tags: ["gif", "cat", "skibo"], image_url: "https://i.pinimg.com/originals/9a/3c/3f/9a3c3fb5f73822af8514df07f6676392.gif" },
    { id: 9, type: "video", file_id: "id", tags: ["video", "cat", "test", "rizzard"], image_url: "https://s15.ytcontent.net/v3/d/video/RtorFs9VaoU/1728280436728515/YTDown.com_YouTube_Media_RtorFs9VaoU_004_144p.mp4?token=17629697889865b127de56dd3f41392711a2357e81" }
]

export async function getAllMemes(): Promise<meme[]> {
    await delay(loadTime);
    return memes;
}

export async function getMemesByTags(_tags: string[]): Promise<found_memes> {
    await delay(loadTime);
    return { exact_match: memes.slice(0, 3), partial_match: memes.slice(3) };
}

export async function deleteMeme(id: number): Promise<void> {
    await delay(loadTime);
    memes = memes.filter(x => x.id != id)
}

export async function updateMeme(id: number, tags: string[]): Promise<void> {
    await delay(loadTime);
    memes = memes.map(x => {
        if (x.id == id) { x.tags = tags; }
        return x;
    })
}