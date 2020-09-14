import { FAILURE, REQUEST, SUCCESS } from "./userTypes";
import axios from "axios";

export const request = () => {
  return {
    type: REQUEST,
    payload: [],
    error: "",
  };
};

export const success = (users) => {
  return {
    type: SUCCESS,
    payload :users,
    error: "",
  };
};

export const failure = (error) => {
  return {
    type: FAILURE,
    payload: [],
    error: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(request);
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        console.log("user >> ",users)
      //  dispatch(success([1,2]))
        dispatch(success(users));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(failure(error));
      });
  };
};
