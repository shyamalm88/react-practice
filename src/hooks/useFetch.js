import { useEffect, useReducer } from "react";
import axios from "axios";

const ACTION = {
  INITIATE_FETCH: "INITIATE_FETCH",
  FETCH_DATA: "FETCH_DATA",
  ERROR: "ERROR",
};

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INITIATE_FETCH:
      return { ...state, data: [], loading: true };
    case ACTION.FETCH_DATA:
      return { ...state, data: action.payload, loading: false };
    case ACTION.ERROR:
      return { ...state, data: [], loading: false, error: action.payload };
    default:
      return state;
  }
}

function useFetch(url) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTION.INITIATE_FETCH });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTION.FETCH_DATA, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ACTION.ERROR, payload: err });
      });
  }, [url]);
  return state;
}

export default useFetch;
