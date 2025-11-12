export type meme = {
    id: number,
    type: "image" | "gif" | "video",
    file_id: string,
    tags: string[],
    image_url: string
}

export type found_memes = {
    exact_match: meme[],
    partial_match: meme[]
}