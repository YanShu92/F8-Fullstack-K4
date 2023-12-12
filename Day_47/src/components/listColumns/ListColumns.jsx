import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Columns from "./column/Columns";
import Button from "@mui/material/Button";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { taskSlice } from "../../store/slice/taskSlice";
const { createCol } = taskSlice.actions;
const ListColumns = ({ columns }) => {
  const dispatch = useDispatch();
  return (
    <SortableContext
      items={columns?.map((a) => a?.column)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            m: 2,
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
        {/* rải columns */}
        {columns?.map((item) => (
          <Columns key={item?._id} column={item} />
        ))}

        {/* add new column */}
        <Box
          sx={{
            minWidth: "350px",
            maxWidth: "350px",
            mx: 2,
            borderRadius: "6px",
            bgcolor: "#ffffff3d",
            height: "fit-content",
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: "#fff",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              pl: 2.5,
              py: 1,
              fontSize: 14,
              ":hover": {
                bgcolor: "#51bd7e",
                color: "#000",
              },
            }}
            onClick={() => {
              dispatch(createCol());
            }}
          >
            Add new Column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  );
};

export default ListColumns;
