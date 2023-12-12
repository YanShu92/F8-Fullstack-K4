import Typography from "@mui/material/Typography";
import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSortable } from "@dnd-kit/sortable";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import { useDispatch } from "react-redux";
import { taskSlice } from "../../../../../store/slice/taskSlice";
const { removeCard, updateTask } = taskSlice.actions;
function Card({ card }) {
  const { _id, content } = card;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: _id, data: { ...card } });
  const dispatch = useDispatch();
  const dndKitCardStyle = {
    // touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? "1px solid #2ecc71" : undefined,
  };
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [taskName, setTaskName] = useState(content);
  const handleRemove = (e) => {
    dispatch(removeCard(_id));
  };
  return (
    <MuiCard
      ref={setNodeRef}
      style={dndKitCardStyle}
      {...attributes}
      {...listeners}
      sx={{
        cursor: "pointer",
        boxShadow: "0 2px 2px rgba(0,0,0,0.2)",
        overflow: "unset",
      }}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <CardContent
        sx={{
          p: "12px 25px 12px 12px",
          "&:last-child": { p: "12px 25px 12px 12px" },
          position: "relative",
          height: "100px",
          p: "4px",
        }}
      >
        {!editMode && (
          <>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 500,
                cursor: "pointer",
                overflowX: "hidden",
                overflowY: "auto",
                width: "100%",
                height: "100%",
              }}
              onClick={() => {
                setEditMode(true);
              }}
            >
              {content}
            </Typography>
            {show && (
              <DeleteForeverIcon
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  cursor: "pointer",
                  fontSize: "large",
                  height: "100%",
                  width: "26px",
                  ":hover": {
                    color: "red",
                    bgcolor: "#ccc",
                  },
                }}
                onClick={handleRemove}
              />
            )}
          </>
        )}
        {editMode && (
          <Textarea
            minRows={2}
            size="lg"
            variant="plain"
            value={taskName}
            autoFocus
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              p: 1,
            }}
            onBlur={() => {
              setEditMode(false);
              console.log(_id, taskName);
              dispatch(
                updateTask({
                  _id: _id,
                  content: taskName,
                })
              );
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditMode(false);
              }
            }}
            onChange={(e) => setTaskName(e.target.value)}
          />
        )}
      </CardContent>
    </MuiCard>
  );
}

export default Card;
