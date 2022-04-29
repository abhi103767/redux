import { ADD_TODO } from "./action.types";

const init = {
    todos : []
}
 
export const todoReducer = (store = init ,action) => {
  console.log(action)
    switch(action.type){
        case ADD_TODO :
            return {...store, todos : [ ...action.payload]  }
        default :
        return store;
    }

}