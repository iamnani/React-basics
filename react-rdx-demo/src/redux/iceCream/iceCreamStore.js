import { createStore } from "redux";
import { iceCreamReducer } from "./iceCreamReducer";

const iceCreamStore = createStore(iceCreamReducer);

export default iceCreamStore;
