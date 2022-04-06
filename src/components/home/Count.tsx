import React from 'react'
import { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export default function Count() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div className="bg-white">{count}</div>
            <button className="button" onClick={()=> dispatch(increment())} >+</button>
            <button className="button" onClick={()=> dispatch(decrement())} >-</button>
        </div>
    )
}
