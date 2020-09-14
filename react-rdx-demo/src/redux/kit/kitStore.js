import { createStore } from "redux";
import kitReducer from "./kitReducer";

const kitStore = createStore(kitReducer);
export default kitStore;
