import { ADD_COUNT } from "./Action.Types";
import { TODO, DELETE_TODO } from "./Action.Types";

function addToCount(value){
    return {type  : ADD_COUNT, payload: value}
}

function addToTodo(data){
    return { type : TODO, payload: data}

}

function deleteTodo(ID){
    
    return {type : DELETE_TODO, payload : {id : ID}}
}

export {addToCount, addToTodo,deleteTodo}