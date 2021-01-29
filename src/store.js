import { createStore } from "redux";

const slotReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_DETAILS":
      return [...state, action.data];
    case "INIT_NOTES":
      return action.data;
    default:
      return state;
  }
};

const store = createStore(slotReducer);

export default store;
