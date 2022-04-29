import { combineReducers, legacy_createStore as createStore } from "redux";
import { todoReducer } from "./todo/reducer";

const rootReducer = combineReducers({
    todos : todoReducer
})
   




const store = createStore(rootReducer)


export {store}