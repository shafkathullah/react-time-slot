import { createStore } from "redux";

const slotReducer = (state = initializeStore(), action) => {
  switch (action.type) {
    case "UPDATE":
      let slotToUpdate = action.data;
      return state.map((slot) =>
        slot.start === slotToUpdate.start ? slotToUpdate : slot
      );
    default:
      return state;
  }
};

//Initialize store with desired size
const initializeStore = (startHour = 9, endHour = 17) => {
  const slotCount = endHour - startHour;
  return Array.from({ length: slotCount }, (_, x) => {
    return {
      start: startHour + x,
      end: startHour + x + 1,
      details: null,
    };
  });
};

const store = createStore(slotReducer);

export default store;
