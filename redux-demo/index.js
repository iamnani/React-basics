const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()


const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "I am buying cake",
  };
}

const initialState = { noOfCakes: 10 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, noOfCakes: state.noOfCakes - 1 };
    default:
      return state;
  }
};


const store = createStore(reducer, applyMiddleware(logger))
// dispath // subscribe// unsubscribe
console.log("Initial State ",store.getState());
const unsubscribe = store.subscribe(() => {
   // console.log("Updated store " ,store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe();

