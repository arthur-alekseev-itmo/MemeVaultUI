import './Search.css'

import { useEffect, useState } from "react"

function SearchIcon() {
    return <div className='search-icon'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
}

export function Search({ search }: { search: (prompt: string) => void }) {
    const [content, setContent] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }

    useEffect(() => {
        search(content);
    }, [content])

    return <div className="search-box">
        <SearchIcon />
        <input className="input-field"
            placeholder="Поиск по тегу"
            onChange={handleChange}
            value={content} />
    </div>
}