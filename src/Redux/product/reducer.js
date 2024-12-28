const initialState = {
    isLoading: false,
    isError: false,
    data: [],
  };
  
  export const reducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case "SET_LOADING":
        return { ...state, isLoading: true, isError: false} ;

      case "SET_SUCCESS":
        return { ...state, isLoading: false, isError: false, data: payload };  

      case "SET_ERROR":
        return { ...state, isLoading: false, isError: true };

      default:
        return state;
    }
  };
  
  // export default reducer;
  