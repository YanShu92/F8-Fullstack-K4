import { legacy_createStore as createStore } from "redux";
const initialState = {
  count: 0,
  data: [],
  correctNumber: 10,
  isCorrect: false,
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

    case "histories/delete": {
      const maxTime = Math.ceil(Math.log2(+localStorage.getItem("maxNumber")));

      return {
        ...state,
        data: [],
        remainingTime: maxTime,
        listInput: [],
        isCorrect: false,
      };
    }

    case "input/addData": {
      return {
        ...state,
        isCorrect: false,
        data: [...state.data, state.listInput],
      };
    }

    case "input/addNumberCorrect": {
      if (state.remainingTime === 1) {
        return {
          ...state,
          isCorrect: true,
          remainingTime: state.remainingTime - 1,
          listInput: [...state.listInput, action.payload],
          data: [...state.data, [...state.listInput, action.payload]],
        };
      }
      return {
        ...state,
        isCorrect: true,
        remainingTime: state.remainingTime - 1,
        listInput: [...state.listInput, action.payload],
      };
    }

    case "input/addNumber": {
      if (state.remainingTime === 1) {
        return {
          ...state,
          remainingTime: state.remainingTime - 1,
          isCorrect: false,
          listInput: [...state.listInput, action.payload],
          data: [...state.data, [...state.listInput, action.payload]],
        };
      }
      return {
        ...state,
        isCorrect: false,
        remainingTime: state.remainingTime - 1,
        listInput: [...state.listInput, action.payload],
      };
    }

    case "mode/change": {
      return { ...state, theme: action.payload === "light" ? "dark" : "light" };
    }
    case "inputNumber/maxNumber": {
      const maxTime = Math.ceil(Math.log2(action.payload));
      return {
        ...state,
        maxNumber: action.payload,
        remainingTime: maxTime,
        isCorrect: false,
        listInput: [],
      };
    }

    case "button/playAgain": {
      const maxTime = Math.ceil(Math.log2(state.maxNumber));
      return {
        ...state,
        remainingTime: maxTime,
        isCorrect: false,
        listInput: [],
      };
    }
    default:
      return state;
  }
};
export const store = createStore(rootReducer);
