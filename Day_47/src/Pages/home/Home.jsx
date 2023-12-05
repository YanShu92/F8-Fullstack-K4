import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../store/middlewares/productMiddleware";
import { client } from "../../utils/client";
import Box from "@mui/material/Box";
import {
  DndContext,
  PointerSensor,
  useSensor,
  MouseSensor,
  TouchSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import ListColumns from "../../components/listColumns/ListColumns";
import { taskSlice } from "../../store/slice/taskSlice";
const { dragColumn } = taskSlice.actions;
import Columns from "../../components/listColumns/column/Columns";
import Card from "../../components/listColumns/column/listCards/card/Card";
const ACTIVE_DRAG_TYPE = {
  COLUMN: "ACTICE_DRAG_COLUMN",
  CARD: "ACTIVE_DRAG_CARD",
};

const Home = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.task.columns);
  const [activeDragId, setActiveDragId] = useState(null);
  const [activeDragType, setActiveDragType] = useState(null);
  const [activeData, setActiveDragData] = useState(null);

  //   const pointerSensor = useSensor(PointerSensor, {
  //     activationConstraint: { distance: 10 },
  //   });

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    const apiKey = localStorage.getItem("apiKey");
    client.setApi(apiKey);
    dispatch(getTask());
  }, []);

  const handleDragEnd = (e) => {
    // console.log(e);
    const { active, over } = e;
    if (!over) return;
    if (active.id !== over.id) {
      const oldIndex = columns.findIndex((a) => a.column === active.id);
      const newIndex = columns.findIndex((a) => a.column === over.id);
      dispatch(
        dragColumn({
          from: oldIndex,
          to: newIndex,
        })
      );
    }
    setActiveDragId(null);
    setActiveDragType(null);
    setActiveDragData(null);
  };
  const handleDragStart = (e) => {
    setActiveDragId(e?.active?.id);
    setActiveDragType(
      e?.active?.data?.current?.columnName
        ? ACTIVE_DRAG_TYPE.COLUMN
        : ACTIVE_DRAG_TYPE.CARD
    );
    setActiveDragData(e?.active?.data?.current);
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };
  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      sensors={sensors}
    >
      <Box
        sx={{
          width: "100%",
          p: "5px 0",
        }}
      >
        <ListColumns columns={columns} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragType && null}
          {activeDragType === ACTIVE_DRAG_TYPE.COLUMN && (
            <Columns column={activeData} />
          )}
          {activeDragType === ACTIVE_DRAG_TYPE.CARD && (
            <Card card={activeData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
};

export default Home;
