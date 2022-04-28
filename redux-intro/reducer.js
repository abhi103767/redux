

import { ADD_COUNT, TODO  } from "./store.type.js";
export const reducer = (store,action) => {

    switch(action.type) {
        case ADD_COUNT :
            return {
                        ...store , counter : store.counter + action.payload 
                    }
    

    case TODO : 
    return {
        ...store , todos : [...store.todos, { ...action.payload}]
    }

    default :
    return store;

}

   
}
