import './MemeBoard.css'

import { useEffect, useState } from 'react'
import { meme } from '../client/types'
import { Meme } from './Meme'
import { Loading } from './Loading';
import { getAllMemes } from '@/client/backendClient';
import { Search } from './Search';

export function MemeBoard() {
    const [reloadFlag, setReloadFlag] = useState<boolean>(false);
    const [allMemes, setAllMemes] = useState<meme[] | null>(null);
    const [memes, setMemes] = useState<meme[] | null>(null);

    const handleFilter = (prompt: string) => {
        console.log(prompt)
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

    const content = (memes != null)
        ? <><Search search={handleFilter} /> {memes.map((e, i) => <Meme key={i} image={e} update={update} />)}</>
        : <div style={{ height: "calc(100vh - 4rem)" }}><Loading text="Загружаем..." /></div>

    return <div className="meme-board">
        {content}
    </div>
}