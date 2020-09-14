import { createStore } from "redux";
import cakeReducer from "./cakeReducer";

const cakeStore = createStore(cakeReducer);
export default cakeStore;
