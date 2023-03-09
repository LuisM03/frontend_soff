import { useState, useEffect } from "react"

export default function Time(){
    // const [localtime, setLocalTime] = useState(null)
    const [hora, setHora] = useState(null)
    const [minutos, setMinutos] = useState(null)

    useEffect(()=>{
        setInterval( function(){
            let today = new Date()    
            setMinutos(today.getMinutes())
            setHora(today.getHours())
        }, 1000)
    })

    return(
        <div>
            <h1 className="font-semibold">{hora}:{minutos} {hora>12? "PM": "AM"}</h1>
        </div>
    )
}