import { ADD_TODO } from "./action.types";


export const reducer = (store,action) => {
  console.log(action)
    switch(action.type){
        case ADD_TODO :
            return {...store, todos : [ ...action.payload]  }
        default :
        return store;
    }

}