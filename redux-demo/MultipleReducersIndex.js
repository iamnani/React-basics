const redux = require("redux");

const BUY_CAKE = "buy_cake";
const BUY_ICECREAM = "buy_icecream";

function buyCake() {
    return {
        type : BUY_CAKE
    }
}

function buyIcecream(){
    return {
        type : BUY_ICECREAM
    }
}

const cakeInitialState = {
  numOfCakes: 10,
};

const iceCreamInitialState = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
        return state
  }
};

const rootReducer = redux.combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

const store = redux.createStore(rootReducer);

const unsubscribe = store.subscribe(() =>{
    console.log("Update state ", store.getState())
});

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe();
