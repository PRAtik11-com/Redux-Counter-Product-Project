
export const setLoading = () => ({
    type: "SET_LOADING",
    payload: true,
  });

  export const setProducts = (data) => ({
    type: "SET_SUCCESS",
    payload: data,
  });
  
  export const setError = (error) => ({
    type: "SET_ERROR",
    payload: error,
  });
  