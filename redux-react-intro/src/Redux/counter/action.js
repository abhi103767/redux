import { ADD_COUNT } from "../Action.Types";


function addToCount(value){
    return {type  : ADD_COUNT, payload: value}
}


export {addToCount}