import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCount } from '../Redux/counter/action';



function AddCount() {
    console.log('counter is rendering')
    const dispatch = useDispatch()
    const counter = useSelector((store) => store.counter.counter)
    return (
        <div> <h1>Counter : {counter}</h1>
            <button onClick={() => {
                dispatch(addToCount(1))
            }}>Increment</button>
        </div>
    )
}

export default AddCount