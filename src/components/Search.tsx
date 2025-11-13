import { useTranslation } from 'react-i18next'
import './Search.css'

import { useEffect, useState } from "react"

function SearchIcon() {
    return <div className='search-icon'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    </div>
}

export function Search({ search }: { search: (prompt: string) => void }) {
    const [content, setContent] = useState("")
    const { t } = useTranslation()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }

    useEffect(() => {
        search(content);
    }, [content])

    return <div className="search-box">
        <SearchIcon />
        <input className="input-field"
            placeholder={t("Search by tags")}
            onChange={handleChange}
            value={content} />
    </div>
}