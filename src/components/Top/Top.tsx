import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export default function Top() {
    const [top, setTop] = useState<any[]>([])
    const navigate = useNavigate()
    
    async function getAllTop()  {
        const res = await axios.get('/all');
        const data = res.data
        setTop(data)

        console.log(top)
    }
    useEffect(()=> {
       getAllTop()
    },[])
    return (
        <div>

            <div className="">
                TOP PAGE
                </div>
            <button className="button" onClick={()=> navigate('/')}>HEHE</button>
            {top.map((e,idx)=> {
                return <div className="" key={idx}>
                    { e.name }
                    {e.description}
                    {e.concentration}
                    {e.size}
                    <img src={e.url} alt="" />
                </div>
            })}


        </div>
    )
}
