const redux = require("redux");
const reduxThunk = require("redux-thunk").default;
const axios = require("axios");

const applyMiddleware = redux.applyMiddleware;

const createStore = redux.createStore;

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USERS_FAIL = "FETCH_USER_FAIL";

const initialState = {
  loading: true,
  users: [],
  errors: "",
};

const requestAction = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

const usersSuccessAction = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

const usersFailureAction = (error) => {
  return {
    payload: error,
    type: FETCH_USERS_FAIL,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: "",
      };

    case FETCH_USERS_SUCCESS:
      return {
          ...state,
        loading: false,
        users: action.payload,
        errors: "",
      };

    case FETCH_USERS_FAIL:
      return {
          ...state,
        errors: action.payload,
        users: [],
        loading: false,
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(requestAction());

    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
         // console.log(response)
        const users = response.data.map((user) => user.name);
     //   console.log(users)
        dispatch(usersSuccessAction(users));
      })
      .catch((error) => {
        dispatch(usersFailureAction(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(reduxThunk));
const unsubscribe = store.subscribe(() => {
  console.log("Store state ", store.getState());
});

store.dispatch(fetchUsers());

//unsubscribe();
