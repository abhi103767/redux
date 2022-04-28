

import { store } from "./store.js";
import {TODO,ADD_COUNT} from './store.type.js'
// // import {addToCount} from "./store.type"

store.dispatch({type : ADD_COUNT, payload : 2})
console.log(store.getState());