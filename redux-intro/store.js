import { legacy_createStore as createStore } from "redux";

import { reducer } from "./reducer.js";





const init = {
    counter :0,
    todos : [],
    theme : 'dark'
}


 const store = createStore(reducer, init);
 console.log(store.getState())
 export {store}



