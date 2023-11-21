export const initialState = {
  isLoading: false,
  isLogin: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "loading/show": {
      return { ...state, isLoading: true };
    }
    case "loading/hide": {
      return { ...state, isLoading: false };
    }
    case "login": {
      return { ...state, isLogin: true };
    }
    default:
      return state;
  }
};
