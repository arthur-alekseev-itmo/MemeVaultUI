import './Loading.css'

export function Loading({ text }: { text: string }) {
    return <div className='loading-div center'>
        <div className='loading-div-content'>
            <div className='center'>
                <span className="loader"></span>
            </div>
            <span> {text} </span>
        </div>
    </div>
}