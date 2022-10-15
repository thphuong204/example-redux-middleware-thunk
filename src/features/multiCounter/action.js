import {ADD_COUNTER,INCREMENT,DECREMENT} from "./reducer";

// 1 {type:ADD_COUNTER} là 1 action. action là 1 object
export const addCounter = () => ({type:ADD_COUNTER});
// 1 {type:INCREMENT, payload:{index}} là 1 action. action là 1 object
export const increment = (index) => ({type:INCREMENT, payload:{index}});
// 1 {type:DECREMENT, payload:{index}} là 1 action. action là 1 object
export const decrement = (index) => ({type:DECREMENT, payload:{index}});