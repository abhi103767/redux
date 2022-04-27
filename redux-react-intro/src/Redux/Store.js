import { legacy_createStore as createStore ,  } from "redux";

import { reducer } from "./Reducer.js";





const init = {
    counter :0,
    todos : []
}


 const store = createStore(reducer, init);



 console.log(store.getState())
 export {store}

