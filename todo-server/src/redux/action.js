import { ADD_TODO } from "./action.types";


function addToTodo(todos){
    return {type : ADD_TODO, payload : [...todos]}
}


export {addToTodo}
