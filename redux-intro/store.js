import { legacy_createStore as createStore } from "redux";

const reducer = (store,action) => {
    if(action.type === "ADD_COUNT"){
        return {
            ...store , count : store.count + store.payload
        }
    } 

    return store;

}

const init = {
    counter :0,
    todos : [],
    theme : 'dark'
}
const store = createStore(reducer, init);

console.log(store.getState())