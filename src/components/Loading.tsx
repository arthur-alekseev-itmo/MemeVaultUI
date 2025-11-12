import './Loading.css'

export function Loading() {
    return <div className='loading-div center'>
        <div className='loading-div-content'>
            <div className='center'>
                <span className="loader"></span>
            </div>
            <span> Загружаем... </span>
        </div>
    </div>
}