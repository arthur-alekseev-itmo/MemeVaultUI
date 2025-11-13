import './Meme.css'
import { meme } from '../client/types'
import { EditPopup } from './popups/EditPopup'
import { useEffect, useState } from 'react'
import { DeletePopup } from './popups/DeletePopup'
import { deleteMeme, getImage, updateMeme } from '@/client/backendClient'
import { Loading } from './Loading'
import { useTranslation } from 'react-i18next'

function TrashIcon() {
    const color = "#ff6655"
    return <div className='edit-icon'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5001 6H3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path> <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path> <path d="M9.5 11L10 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path> <path d="M14.5 11L14 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"></path> <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6" stroke={color} strokeWidth="1.5"></path> </g></svg>
    </div>
}

function EditIcon() {
    return <div className='edit-icon'>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    </div>
}

function Tag({ text }: { text: string }) {
    return <div className='tag'> <span> {text} </span> </div>
}

function EditButton({ onClick }: { onClick: () => void }) {
    return <div style={{ position: "relative", width: 0, height: 0 }}>
        <div className='edit-button' onClick={onClick}>
            <EditIcon />
        </div>
    </div>
}

function DeleteButton({ onClick }: { onClick: () => void }) {
    return <div style={{ position: "relative", width: 0, height: 0 }}>
        <div className='edit-button' onClick={onClick} style={{ left: "2.5rem" }}>
            <TrashIcon />
        </div>
    </div>
}

export function Content({ image }: { image: meme }) {
    const [resource, setResource] = useState<string | null>(null);
    useEffect(() => {
        getImage(image.tg_file_id).then(r => setResource(r))
    }, [])
    const resourceUsed = resource ?? "https://placehold.co/600x400?text=Loading..."
    switch (image.type) {
        case "video": return <video className="meme-img" controls width="250" muted> <source src={resourceUsed} /> </video>
        default: return <img className="meme-img" src={resourceUsed} />
    }
}

export function Meme({ image, update }: { image: meme, update: () => Promise<void> }) {
    const [popup, setPopup] = useState(<></>)
    const [loadingMessage, setLoadingMessage] = useState<string | null>(null);
    const { t } = useTranslation();

    const openEditPopup = () => {
        const close = () => setPopup(<></>)
        const save = (tags: string) => {
            setLoadingMessage(t("Saving"));
            updateMeme(image.tg_file_id, tags.split(" ")).then(() => { close(); update().then(() => setLoadingMessage(null)); })
        }
        const r = <EditPopup meme={image} close={close} save={save} />
        setPopup(r)
    }

    const openDeletePopup = () => {
        const close = () => setPopup(<></>)
        const remove = () => {
            setLoadingMessage(t("Deleting"));
            deleteMeme(image.tg_file_id).then(() => { close(); update().then(() => setLoadingMessage(null)); })
        }
        const r = <DeletePopup meme={image} close={close} remove={remove} />
        setPopup(r)
    }

    const ui = <div className='meme-container'>
        {popup}
        <div className='meme-img-container'>
            <EditButton onClick={openEditPopup} />
            <DeleteButton onClick={openDeletePopup} />
            <Content image={image} />
        </div>
        <div className='meme-tags'>
            {image.tags.map((t, i) => <Tag key={i} text={t} />)}
        </div>
    </div>

    return loadingMessage ? <Loading text={loadingMessage!} /> : ui;
}