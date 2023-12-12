import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask, postTask } from "../../store/middlewares/productMiddleware";
import { client } from "../../utils/client";
import Box from "@mui/material/Box";
import { toast } from "react-toastify";

import {
  DndContext,
  PointerSensor,
  useSensor,
  MouseSensor,
  TouchSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
} from "@dnd-kit/core";
import ListColumns from "../../components/listColumns/ListColumns";
import { taskSlice } from "../../store/slice/taskSlice";
import Columns from "../../components/listColumns/column/Columns";
import Card from "../../components/listColumns/column/listCards/card/Card";
import { cloneDeep } from "lodash";
import { arrayMove } from "@dnd-kit/sortable";

const { dragColumn, dragTaskList, overTaskList } = taskSlice.actions;
const ACTIVE_DRAG_TYPE = {
  COLUMN: "ACTICE_DRAG_COLUMN",
  CARD: "ACTIVE_DRAG_CARD",
};

const Home = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.task.columns);
  const taskList = useSelector((state) => state.task.taskList);
  const [activeDragId, setActiveDragId] = useState(null);
  const [activeDragType, setActiveDragType] = useState(null);
  const [activeData, setActiveDragData] = useState(null);
  const status = useSelector((state) => state.postTask.status);
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
    const { active, over } = e;
    if (!active || !over) return;

    if (activeDragType === ACTIVE_DRAG_TYPE.CARD) {
      const {
        data: {
          current: { sortable: sortableActive, ...activeDraggingCardData },
        },
      } = active;

      const {
        data: {
          current: { sortable: sortableOver, ...overDraggingCardData },
        },
      } = over;
    }

    if (activeDragType === ACTIVE_DRAG_TYPE.COLUMN) {
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
    }
    setActiveDragId(null);
    setActiveDragType(null);
    setActiveDragData(null);
    const body = taskList.map((task) => {
      return {
        content: task.content,
        columnName: columns.find((column) => column.column === task.column)
          .columnName,
        column: task.column,
      };
    });
    dispatch(postTask(body));
    if (status === "post-success") toast.success("Cập nhật thành công");
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

  const handleDragOver = (e) => {
    if (activeDragType === ACTIVE_DRAG_TYPE.COLUMN) return;
    const { active, over } = e;
    if (!active || !over) return;

    const {
      data: {
        current: { sortable: sortableActive, ...activeDraggingCardData },
      },
    } = active;

    const {
      data: {
        current: { sortable: sortableOver, ...overDraggingCardData },
      },
    } = over;
    const newTaskList = cloneDeep(taskList);

    const activeIndex = newTaskList.findIndex(
      (a) => a._id === activeDraggingCardData._id
    );
    const overIndex = newTaskList.findIndex(
      (a) => a._id === overDraggingCardData._id
    );
    if (activeDraggingCardData.column !== overDraggingCardData.column) {
      newTaskList[activeIndex].column = overDraggingCardData.column;
    }
    dispatch(overTaskList(arrayMove(newTaskList, activeIndex, overIndex)));
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
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
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
