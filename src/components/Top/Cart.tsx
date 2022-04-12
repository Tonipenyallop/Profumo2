import React, {useEffect} from 'react'

export default function Cart({visibleCart, setVisibleCart}:any) {
    useEffect(() => {
        console.log('hehe')
        console.log(visibleCart)
        const cart =  document.getElementById('cart');
        if(cart?.classList.contains('right-7')){
            cart?.classList.remove('invisible')
            cart?.classList.add('right-0')
            cart?.classList.remove('right-7')
        }else{
            cart?.classList.add('invisible')
            cart?.classList.remove('right-0')
            cart?.classList.add('right-7')

        }
    }, [visibleCart])
    return (
        <div className="">
            <div id='cart' className="bg-red-300 fixed invisible right-7   transition-all duration-700">
                <div className="">Total €</div>
                <button className="button" onClick={()=> {
                    setVisibleCart(false)
                }}>X</button>
                <button className="button">Go pay</button>
            </div>
        </div>
    )
}
