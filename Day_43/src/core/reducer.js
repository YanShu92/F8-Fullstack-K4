export const initialState = {
  count: 0,
  todoList: [],
  isLoading: false,
  isLogin: false,
  isToast: false,
  toast: {
    message: "",
    status: 0,
  },
  listCart: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "loading/show": {
      return { ...state, isLoading: true, isToast: false };
    }
    case "loading/hide": {
      return { ...state, isLoading: false, isToast: false };
    }
    case "login": {
      return { ...state, isLogin: true, isToast: false };
    }

    case "login/comeback": {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isToast: true,
        toast: {
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    }

    case "logout": {
      return {
        ...state,
        isLogin: false,
        isToast: true,
        toast: {
          message: "Vui lòng đăng nhập lại",
          status: 0,
        },
        listCart: [],
      };
    }

    case "pay-cart": {
      return {
        ...state,
        isLogin: true,
        isLoading: false,
        listCart: [],
        isToast: true,
        toast: {
          message: "Bạn thanh toán thành công",
          status: 1,
        },
      };
    }
    case "noAdd-more": {
      return {
        ...state,
        isLoading: false,
        isToast: true,
        toast: {
          message: "Sản phẩm hết hàng. Không thể add thêm",
          status: 3,
        },
      };
    }

    case "error-addCart": {
      return {
        ...state,
        isLoading: false,
        isToast: true,
        toast: {
          message: "Sản phẩm hết hàng. Vui lòng nhập sản phẩm khác",
          status: 3,
        },
      };
    }

    case "addCart": {
      return {
        ...state,
        isLoading: false,
        isToast: true,
        listCart: action.payload,
        toast: {
          message: "Bạn thêm sản phẩm thành công",
          status: 1,
        },
      };
    }

    case "toast": {
      return {
        ...state,
        isLoading: false,
        isToast: true,
        toast: {
          message: action.payload.message,
          status: action.payload.status,
        },
      };
    }
    default:
      return state;
  }
};
