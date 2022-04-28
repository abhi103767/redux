import { combineReducers, legacy_createStore as createStore ,  } from "redux";

import { couterReducer } from "./counter/reducer";
import { todoReducer } from "./todos/reducer";



const rootReducer = combineReducers({
    counter : couterReducer,
    todos : todoReducer
})






 const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



 console.log(store.getState())
 export {store}

