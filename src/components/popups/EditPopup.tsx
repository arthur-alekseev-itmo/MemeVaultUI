import { useEffect, useState } from "react"
import { meme } from "../../client/types"
import { Button } from "./Button"
import "./EditPopup.css"
import "./Popups.css"
import { backButton } from '@tma.js/sdk-react';

export function BackButton({ close }: { close: () => void }) {
    useEffect(() => { backButton.show(); }, [])
    const closeWrapper = () => {
        backButton.hide();
        close();
    }
    backButton.onClick(closeWrapper)
    return <div style={{ position: "relative", width: 0, height: 0 }} onClick={closeWrapper}>
        <div className="edit-button" style={{ top: "-0rem", left: "-0rem" }}>
            <svg className="edit-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#ffffff" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
        </div>
    </div>
}

export function EditPopup({ meme, close, save }: { meme: meme, close: () => void, save: (tags: string) => void }) {
    const [tags, setTags] = useState(meme.tags.join(" "))

    const changeTags = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTags(e.target.value)
        console.log(tags)
    }

    return <div className="popup">
        <div className="edit-popup">
            <BackButton close={close} />
            <div className="center full-wide">
                <span className="edit-header">Редактирование</span>
            </div>
            <div className="edit-popup-image">
                <img className="meme-img" src={meme.image_url} />
            </div>
            <span className="grayish"> Редактировать теги</span>
            <div className="tags-edit">
                <textarea className="input-area"
                    placeholder="Теги"
                    onChange={changeTags}
                    value={tags} />
            </div>
            <div className="bottom-control">
                <Button onClick={() => save(tags)}> <span className="green"> Сохранить </span> </Button>
                <Button onClick={close}> <span className="white"> Отмена </span> </Button>
            </div>
        </div>
    </div >
}