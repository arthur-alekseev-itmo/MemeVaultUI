import "./DeletePopup.css"

import { meme } from "@/client/types"
import { BackButton } from "./EditPopup"
import { Button } from "./Button"
import { Content } from "../Meme"
import { useTranslation } from "react-i18next"

export function DeletePopup({ meme, close, remove }: { meme: meme, close: () => void, remove: () => void }) {
    const { t } = useTranslation();

    return <div className="popup">
        <div className="edit-popup">
            <BackButton close={close} />
            <div className="center full-wide">
                <span className="edit-header"> {t("Delete file")} </span>
            </div>
            <Content image={meme} />
            <div className="bottom-control">
                <Button onClick={remove}> <span className="red"> {t("Delete")} </span> </Button>
                <Button onClick={close}> <span className="white"> {t("Cancel")} </span> </Button>
            </div>
        </div>
    </div>
}