import { ADD, SUB } from "./action";


const intiliaze = {
    counter : 0
}

export const reducer = (state=intiliaze  , {type , payload} ) => {
   
  switch(type){
    case ADD : {
         return {counter: state.counter + payload}
    }
    case SUB : {
        return {counter: state.counter - payload}
   }
    default:
        return state;
  }
}

// export default reducer
