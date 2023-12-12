import { createSlice } from "@reduxjs/toolkit";
import { getTask } from "../middlewares/productMiddleware";
import { arrayMove } from "../../utils/formatters";
import { current } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
  columns: [],
  taskList: [],
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    dragColumn: (state, action) => {
      state.columns = arrayMove(
        state.columns,
        action.payload.from,
        action.payload.to
      );
    },

    dragTaskList: (state, action) => {
      state.taskList = arrayMove(
        state.taskList,
        action.payload.from,
        action.payload.to
      );
    },

    overTaskList: (state, action) => {
      state.taskList = action.payload;
    },

    removeCard: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task._id !== action.payload
      );
    },
    updateCol: (state, action) => {
      state.columns = state.columns.map((col) => {
        if (col.column !== action.payload.column) return col;
        return { ...col, columnName: action.payload.columnName };
      });
    },
    updateTask: (state, action) => {
      state.taskList = state.taskList.map((task) => {
        if (task._id !== action.payload._id) return task;
        return { ...task, content: action.payload.content };
      });
    },
    delCol: (state, action) => {
      state.columns = state.columns.filter(
        (col) => col.column !== action.payload
      );
    },
    createCol: (state, action) => {
      state.columns = [
        ...state.columns,
        {
          _id: nanoid(),
          column: `column${state.columns.length + 1}`,
          columnName: `Column ${state.columns.length + 1}`,
        },
      ];
    },
    createTask: (state, action) => {
      state.taskList = [
        ...state.taskList,
        {
          _id: nanoid(),
          column: action.payload,
          content: `New Task ${state.taskList.length}`,
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.status = "success";
      state.columns = action.payload?.data?.columns?.map(
        ({ _id, column, columnName }) => ({ _id, column, columnName })
      );
      state.taskList = action.payload?.data?.tasks?.map(
        ({ _id, column, content }) => ({ _id, column, content })
      );
    });
    builder.addCase(getTask.rejected, (state, action) => {
      state.status = "error";
    });
  },
});
