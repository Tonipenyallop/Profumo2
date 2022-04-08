import React from 'react'

export default function Card({top} : any) {
    return (
        <div>
            {top && top.map((e : any,idx : number)=> {
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
