import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import Card from './Card'
import Cart from './Cart'

export default function Top() {
    // interface CardProps {
    //     top : Array<string>
    // }
    const [visibleCart, setVisibleCart] = useState<boolean>(false);

    const [top,setTop] = useState<any>([])
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
            <Cart visibleCart={visibleCart}/>
            <div className="">
                TOP PAGE
                </div>
            <button className="button" onClick={()=> navigate('/')}>HEHE</button>
            <Card top={top} setVisibleCart={setVisibleCart} visibleCart={visibleCart} />
        </div>
    )
}
