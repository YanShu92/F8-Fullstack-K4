import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Card from "./card/Card";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useRef, useEffect } from "react";

function ListCards({ columnId }) {
  const taskRef = useRef(null);
  const taskList = useSelector((state) => state.task.taskList);
  const taskColumn = taskList?.filter((task) => task.column === columnId);
  useEffect(() => {
    taskRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [taskColumn.length]);
  return (
    <SortableContext
      items={taskList?.map((a) => a._id)}
      strategy={verticalListSortingStrategy}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 1,
          // bgcolor: "#ccc",
          bgcolor: "#ebecf0",
          p: "0 5px",
          m: "0 5px",
          overflowX: "hidden",
          overflowY: "auto",
          height: "400px",
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#bfc2cf",
          },
        }}
      >
        {taskList
          ?.filter((task) => task.column === columnId)
          ?.map((task) => (
            <Card key={task._id} card={task} />
          ))}
        <div ref={taskRef}></div>
      </Box>
    </SortableContext>
  );
}

export default ListCards;
