import Box from "@mui/material/Box";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListCards from "./listCards/ListCards";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const Columns = ({ column }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column.column, data: { ...column } });

  const dndKitColumnStyle = {
    // touchAction: "none",
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
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {column.columnName}
          </Typography>
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
          >
            Add Task
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Columns;
