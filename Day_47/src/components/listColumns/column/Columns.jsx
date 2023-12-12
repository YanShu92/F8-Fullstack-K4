import Box from "@mui/material/Box";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListCards from "./listCards/ListCards";
import TextField from "@mui/material/TextField";
import { useSortable } from "@dnd-kit/sortable";
import Input from "@mui/material/Input";
import { CSS } from "@dnd-kit/utilities";
const ariaLabel = { "aria-label": "description" };
import { useRef, useState } from "react";
import { taskSlice } from "../../../store/slice/taskSlice";
import { useDispatch } from "react-redux";
const { updateCol, delCol, createTask } = taskSlice.actions;
const Columns = ({ column }) => {
  const [editMode, setEditMode] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.column,
    data: { ...column },
    disabled: editMode,
  });
  const [update, updateColumn] = useState(column.columnName);
  const dispatch = useDispatch();
  const dndKitColumnStyle = {
    touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    height: "100%",
    opacity: isDragging ? 0.5 : undefined,
  };

  return (
    <div ref={setNodeRef} style={dndKitColumnStyle} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: "350px",
          maxWidth: "350px",
          bgcolor: "#ebecf0",
          ml: 2,
          borderRadius: "6px",
          height: "fit-content",
        }}
      >
        <Box
          sx={{
            height: "50px",
            p: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setEditMode(true);
          }}
        >
          {!editMode && (
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                px: 1,
              }}
            >
              {column.columnName}
            </Typography>
          )}
          {editMode && (
            <Input
              defaultValue={column.columnName}
              inputProps={ariaLabel}
              autoFocus
              sx={{
                fontSize: "21.25px",
                fontWeight: "bold",
                color: "#000",
                bgcolor: "#fff",
                px: 1,
                borderRadius: "6px",
              }}
              onBlur={() => {
                setEditMode(false);
                dispatch(
                  updateCol({
                    column: column.column,
                    columnName: update,
                  })
                );
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") {
                  dispatch(
                    updateCol({
                      column: column.column,
                      columnName: update,
                    })
                  );
                  return;
                }
                setEditMode(false);
              }}
              onChange={(e) => updateColumn(e.target.value)}
            />
          )}

          <DeleteForeverIcon
            sx={{
              cursor: "pointer",
              fontSize: "large",
              height: "100%",
              width: "26px",
              ":hover": {
                color: "red",
                bgcolor: "#ccc",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(delCol(column.column));
            }}
          />
        </Box>
        {/* Box Column body */}
        <ListCards columnId={column.column} />

        {/* Box Column footer */}
        <Box
          sx={{
            height: "50px",
          }}
        >
          <Button
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              width: "100%",
              fontSize: 14,
              height: "100%",
              ":hover": {
                bgcolor: "#ccc",
              },
              justifyContent: "flex-start",
              pl: 2.5,
            }}
            onClick={() => {
              dispatch(createTask(column.column));
            }}
          >
            Add Task
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Columns;
