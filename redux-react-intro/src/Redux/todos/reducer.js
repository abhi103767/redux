import {  DELETE_TODO, TODO } from "../Action.Types";
const init = {
    todos : []
}

export const todoReducer = (store = init,{type, payload}) => {
    console.log(store.todos,payload)

    switch(type) {
        case TODO : 
        return {
            ...store , todos : [...store.todos, {...payload}]
        }

        case DELETE_TODO:
            {
                const id = payload.id;
                const newTodos = store.todos.filter((item) => item.id !== id);
                return {
                    ...store, todos : [...newTodos]
                }
            }

    default :
    return store;

}

   
}