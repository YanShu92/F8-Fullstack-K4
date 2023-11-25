import { legacy_createStore as createStore } from "redux";
const initialState = {
  count: 0,
  data: [],
  correctNumber: Math.floor(Math.random() * 512) + 1,
  isCorrect: false,
  listInput: [],
  theme: "light",
  remainingTime: 9,
  maxNumber: 512,
  status: 3,
  message: "Chào mừng bạn đến với trò chơi đoán chữ",
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/times": {
      return { ...state, remainingTime: state.remainingTime - 1 };
    }

    case "histories/delete": {
      const maxTime = Math.ceil(Math.log2(+localStorage.getItem("maxNumber")));
      const random = Math.floor(Math.random() * state.maxNumber) + 1;
      return {
        ...state,
        data: [],
        remainingTime: maxTime,
        correctNumber: random,
        listInput: [],
        status: 1,
        message: "Bạn đã xóa thành công",
        isCorrect: false,
      };
    }

    case "input/invalid": {
      return {
        ...state,
        status: 0,
        message: "Bạn đã từng nhập số này",
      };
    }

    case "input/addData": {
      return {
        ...state,
        isCorrect: false,
        data: [state.listInput, ...state.data],
      };
    }

    case "input/addNumberCorrect": {
      return {
        ...state,
        isCorrect: true,
        remainingTime: state.remainingTime - 1,
        listInput: [...state.listInput, action.payload],
        data: [[...state.listInput, action.payload], ...state.data],
        status: 1,
        message: "Bạn dự đoán chính xác",
      };
    }

    case "input/addNumber": {
      if (state.remainingTime === 1) {
        return {
          ...state,
          remainingTime: state.remainingTime - 1,
          isCorrect: false,
          listInput: [...state.listInput, action.payload.element],
          data: [[...state.listInput, action.payload.element], ...state.data],
          status: 0,
          message: "Chúc bạn may mắn lần sau",
        };
      }
      return {
        ...state,
        isCorrect: false,
        remainingTime: state.remainingTime - 1,
        listInput: [...state.listInput, action.payload.element],
        status: 2,
        message: action.payload.message,
      };
    }

    case "mode/change": {
      return { ...state, theme: action.payload === "light" ? "dark" : "light" };
    }

    case "inputNumber/maxNumber": {
      const maxTime = Math.ceil(Math.log2(action.payload));
      const random = Math.floor(Math.random() * action.payload) + 1;

      return {
        ...state,
        correctNumber: random,
        maxNumber: action.payload,
        remainingTime: maxTime,
        isCorrect: false,
        listInput: [],
        status: 1,
        message: "Chào mừng đến đoán số",
      };
    }

    case "button/playAgain": {
      const maxTime = Math.ceil(Math.log2(state.maxNumber));
      const random = Math.floor(Math.random() * state.maxNumber) + 1;
      return {
        ...state,
        correctNumber: random,
        remainingTime: maxTime,
        isCorrect: false,
        listInput: [],
        status: 3,
        message: "Cùng thử lại nào",
      };
    }
    default:
      return state;
  }
};
export const store = createStore(rootReducer);
