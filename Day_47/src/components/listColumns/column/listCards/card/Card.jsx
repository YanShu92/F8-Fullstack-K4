import Typography from "@mui/material/Typography";
import { Card as MuiCard } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSortable } from "@dnd-kit/sortable";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
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

  const dndKitCardStyle = {
    // touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };
  const [show, setShow] = useState(false);

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
        }}
      >
        <Typography
          variant="h4"
          sx={{
            height: "100px",
            fontWeight: 500,
            cursor: "pointer",
            overflowX: "hidden",
            overflowY: "auto",
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
          />
        )}
      </CardContent>
    </MuiCard>
  );
}

export default Card;
