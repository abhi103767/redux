
import { TODO, DELETE_TODO } from "../Action.Types";


function addToTodo(data){
    return { type : TODO, payload: data}

}

function deleteTodo(ID){
    
    return {type : DELETE_TODO, payload : {id : ID}}
}

export { addToTodo,deleteTodo}