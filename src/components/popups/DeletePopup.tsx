import "./DeletePopup.css"

import { meme } from "@/client/types"
import { BackButton } from "./EditPopup"
import { Button } from "./Button"

export function DeletePopup({ meme, close, remove }: { meme: meme, close: () => void, remove: () => void }) {
    return <div className="popup">
        <div className="edit-popup">
            <BackButton close={close} />
            <div className="center full-wide">
                <span className="edit-header">Удаление</span>
            </div>
            <img className="meme-img to-delete" src={meme.image_url} />
            <div className="bottom-control">
                <Button onClick={remove}> <span className="red"> Удалить </span> </Button>
                <Button onClick={close}> <span className="white"> Отмена </span> </Button>
            </div>
        </div>
    </div>
}