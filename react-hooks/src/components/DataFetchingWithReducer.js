import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Error in retrieving posts",
        post: {},
      };

    default:
      return state;
  }
};

function DataFetchingWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return <div>{state.loading ? "loading" : state.post.title}
  {state.error ?  state.error : '' } </div>;
}

export default DataFetchingWithReducer;
