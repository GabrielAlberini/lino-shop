import React, {useState} from 'react'

export default function Click () {
    
    const [clicks, setClicks] = useState(0)
    const [Hour, setHour] = useState()
    
    const hazmeClick = () => {
        setClicks(clicks + 1)
        setHour(new Date().toLocaleString())
    }

    return (
        <div>
            <h1>Clicks {clicks}</h1>
            <h2>Hora: {Hour}</h2>
            <button onClick={hazmeClick}>Hazme Click</button>
        </div>
    )
}