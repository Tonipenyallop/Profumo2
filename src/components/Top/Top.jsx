import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Top() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="">
                TOP PAGE
                </div>
            <button className="button" onClick={()=> navigate('/')}>HEHE</button>

        </div>
    )
}
