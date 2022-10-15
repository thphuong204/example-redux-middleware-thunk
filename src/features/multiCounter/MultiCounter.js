import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addCounter,increment,decrement} from "./action";

function MultiCounter() {
    const counters = useSelector((state) => state.multiCounter );
    const dispatch  = useDispatch();
  return (
    <div>
        <button onClick={()=> dispatch(addCounter())}>Add Counter</button>
        {counters.map((counter,index)=> {
            return(
            <div key={index} style={{margin:"10px", color:"black"}}>
                {/* onClick không nhận tham số bên ngoài truyền vào, tham số index được truyền trong increment function */}
                <button onClick={()=> dispatch(increment(index))}>+</button> 
                <span>{counter.count}</span>
                <button onClick={()=> dispatch(decrement(index))}>-</button>
            </div>
            )
        })}
    </div>
  )
}

export default MultiCounter