import "./Button.css"

export function Button({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
    return <button className="popup-button" onClick={onClick}>
        {children}
    </button>
}