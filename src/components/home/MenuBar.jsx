import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function MenuBar() {
    const navigate = useNavigate()
    const navigateToPage = () => {
        navigate('/top')
    }
    return (
        <div className="flex justify-center items-center">
            <button className="button" value="top" onClick={navigateToPage}>Top 5</button>
            <button className="button" onClick={() => console.log('nothing happened yet')}>Top 5 In Summer</button>
            <button className="button" onClick={() => console.log('nothing happened yet')}>Top 5 In Winter</button>

        </div>
    )
}
