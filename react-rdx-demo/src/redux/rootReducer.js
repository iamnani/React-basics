import { combineReducers } from "redux";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";
import { cakeReducer } from "./cake/cakeReducer";
import kitReducer from "./kit/kitReducer";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  kit: kitReducer,
  user: userReducer
});

export default rootReducer;
