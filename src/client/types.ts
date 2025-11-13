export type meme = {
    type: "image" | "gif" | "video",
    file_id: string,
    tags: string[],
}

export type found_memes = {
    images: meme[]
}