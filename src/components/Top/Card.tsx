import React from 'react'

export default function Card({top} : any) {
    return (
        <div className="flex flex-wrap border-red-800 border-4 ">
            {top && top.map((e : any,idx : number)=> {
                return <div className="flex border-2 border-red-300" key={idx}>
                    <div className="">
                    { e.name }
                    </div>
                    <div className="">
                    {e.description}
                    </div>
                    <div className="">
                    {e.concentration}
                    </div>
                    <div className="">
                    {e.size}
                    </div>
                    <img src={e.url} alt="" />
                </div>
            })}
        </div>
    )
}
