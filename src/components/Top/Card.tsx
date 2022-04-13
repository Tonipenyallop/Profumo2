import React, {useState} from 'react'

export default function Card({top , setVisibleCart, visibleCart} : any) {
    const [clicked, setClicked] = useState<boolean>(false)

    function toggleDescription(idx : number){
        const element = getElement(idx);
        const description  = element?.querySelector('#description')

        if(description?.classList.contains('h-0')){
            // description?.classList.remove('invisible')
            // description?.classList.remove('max-h-0')
            // description?.classList.add('max-h-fit')
            description?.classList.remove('h-0')
            description?.classList.add('h-96')
            description?.classList.add('pt-10')
            description?.classList.add('px-2')

            
        }
        else{
            // description?.classList.add('invisible')
            // description?.classList.remove('max-h-fit')
            // description?.classList.add('max-h-0')
            description?.classList.remove('h-96')
            description?.classList.remove('pt-10')

            description?.classList.add('h-0')
        }

        setClicked(!clicked)
        
    }
    function getElement(idx:number){
        return document.getElementById(`${idx}`)
    }
    return (
        <div className="flex flex-wrap justify-center items-start border-blue-800 border-4 ">
            {top && top.map((e : any,idx : number)=> {
                return <div className="flex  flex-col border-8  bg-green-300  rounded-3xl" key={idx} id={`${idx}`}>
                    <div className="flex border-8 items-center justify-center">
                        { e.name }
                    </div>
                    <button className="button" onClick={()=> toggleDescription(idx) }>Description</button>

                    <div id="description" className="description h-0 ">{e.description}</div> 
                    <div className="flex border-8 items-center justify-center">
                    {e.concentration}
                    </div>
                    <div className="flex border-8 items-center justify-center">
                    {e.size}
                    </div>
                    <img className="max-h-72 min-h-max" src={e.url} alt="" />
                    <div className="text-center">€{e.price}</div>
                    
                    <button className="button" onClick={()=> {
                        // visible cart and add the value
                        console.log('clicked')
                        console.log(visibleCart)

                        setVisibleCart(true)

                    }}>Add To Cart</button>
                </div>
                
            })}
        </div>
    )
}
