import { BUY_KIT } from "./kitTypes";

const initialState =  {
    numOfKits: 10,
};

const kitReducer = (state = initialState, action) => {

  switch (action.type) {
    case BUY_KIT:
      return {
        ...state,
        numOfKits: state.numOfKits - 1,
      };
    default:
      return state;
  }
};

export default kitReducer;
