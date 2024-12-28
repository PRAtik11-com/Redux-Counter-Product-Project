import { ADD, SUB } from "./action"

export  function ADDTO(val) {    
    return {
        type:ADD, payload: val
    }
}

export  function SUBTO(val) {    
    return {
        type:SUB, payload: val
    }
}