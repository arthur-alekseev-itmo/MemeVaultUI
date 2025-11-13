import './MemeBoard.css'

import { useEffect, useState } from 'react'
import { meme } from '../client/types'
import { Meme } from './Meme'
import { Loading } from './Loading';
import { getAllMemes } from '@/client/backendClient';
import { Search } from './Search';
import { useTranslation } from 'react-i18next';

function NoMemes() {
    const { t } = useTranslation();

    return <div className="nothing-found-div">
        <div className='nothing-found-svg'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#ffffff"></ellipse> <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#ffffff"></ellipse> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
        </div>
        <div className="nothing-found-text">
            <span className="nothing-found">{t("Nothing found")}</span>
        </div>
        <div className="nothing-found-text">
            <span className="nothing-found">{t("Use")} <a>/add</a> {t("to upload")} </span>
        </div>
    </div>
}

export function MemeBoard() {
    const [reloadFlag, setReloadFlag] = useState<boolean>(false);
    const [allMemes, setAllMemes] = useState<meme[] | null>(null);
    const [memes, setMemes] = useState<meme[] | null>(null);
    const { t } = useTranslation();

    const handleFilter = (prompt: string) => {
        const filtered = allMemes?.filter(x => x.tags.join(" ").includes(prompt))
        setMemes(filtered ?? null);
    }

    const refresh = () => getAllMemes().then(r => { setAllMemes(r); handleFilter("") })

    const update = () => {
        setReloadFlag(!reloadFlag)
        return refresh()
    }

    useEffect(() => {
        refresh()
    }, [reloadFlag]);

    useEffect(() => {
        handleFilter("");
    }, [allMemes])

    if (memes == null) {
        return <div style={{ height: "calc(100vh - 4rem)" }}> <Loading text={t("Loading...")} /> </div>
    }

    const content =
        memes.length == 0 ? <NoMemes />
            : <div className="meme-board"> {memes.map((e, i) => <Meme key={i} image={e} update={update} />)} </div>

    return <div className='meme-board-outer'>
        <Search search={handleFilter} />
        {content}
    </div>
}