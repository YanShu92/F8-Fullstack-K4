import { legacy_createStore as createStore } from "redux";
const initialState = {
  count: 0,
  data: [],
  correctNumber: 10,
  listInput: [],
  theme: "light",
  remainingTime: 9,
  maxNumber: 512,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/times": {
      return { ...state, remainingTime: state.remainingTime - 1 };
    }

    case "input/addData": {
      return {
        ...state,
        data: [...state.data, state.listInput],
      };
    }
    case "input/addNumber": {
      if (state.remainingTime === 1) {
        return {
          ...state,
          remainingTime: state.remainingTime - 1,
          listInput: [...state.listInput, action.payload],
          data: [...state.data, state.listInput],
        };
      }
      return {
        ...state,
        remainingTime: state.remainingTime - 1,
        listInput: [...state.listInput, action.payload],
      };
    }

    case "mode/change": {
      return { ...state, theme: action.payload === "light" ? "dark" : "light" };
    }
    case "inputNumber/maxNumber": {
      return { ...state, maxNumber: action.payload };
    }
    default:
      return state;
  }
};
export const store = createStore(rootReducer);
