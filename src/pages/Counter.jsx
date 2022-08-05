import Button from "../components/Button";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/Counterslice.js';

export default function Counter(){
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <>
    <Button label="increment" className="create" handleClick={() => dispatch(increment())}/>
    <span>{count}</span>
    <Button className="cancel"label ="decrement" handleClick={() => dispatch(decrement())}/> 
    </>
    ) 
    }
