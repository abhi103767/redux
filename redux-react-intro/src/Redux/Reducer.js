import { ADD_COUNT, DELETE_TODO, TODO } from "./Action.Types";
export const reducer = (store,{type, payload}) => {
    console.log(store.todos,payload)

    switch(type) {

        case ADD_COUNT :
            return {
                        ...store , counter : store.counter + payload 
                    }
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
