export type meme = {
    file_type: "photo" | "gif" | "video",
    tg_file_id: string,
    tags: string[],
}

export type found_memes = {
    images: meme[]
}