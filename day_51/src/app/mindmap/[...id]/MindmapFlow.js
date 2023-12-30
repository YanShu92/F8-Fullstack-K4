import React, { useState, useCallback, useRef } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
} from "reactflow";
import TextUpdaterNode from "./TextUpdateNode.js";
import CustomEdge from "./CustomEdges.js";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "0",
    data: { label: "My Mindmap" },
    position: { x: 100, y: 50 },
    type: "textUpdater",
    origin: [0.5, 0],
    width: 150,
    height: 40,
    selected: false,
    dragging: false,
    style: {
      backgroundColor: "#8bc34a",
      border: "1px solid #eee",
      padding: "5px",
      borderRadius: "5px",
      fontWeight: "700",
    },
  },
];
let id = 1;
const getId = () => `${id++}`;

const initialEdges = [];
const nodeTypes = { textUpdater: TextUpdaterNode };
const edgeTypes = {
  "custom-edge": CustomEdge,
};

const MindmapFlow = () => {
  // const [nodes, setNodes] = useState(initialNodes);
  // const [edges, setEdges] = useState(initialEdges);
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  // const onNodesChange = useCallback(
  //   (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  //   []
  // );

  // const onEdgesChange = useCallback(
  //   (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  //   []
  // );

  const onConnect = useCallback((params) => {
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [screenToFlowPosition]
  );

  return (
    <ReactFlowProvider>
      <div
        style={{ width: "100%", height: 500 }}
        className="wrapper py-5"
        ref={reactFlowWrapper}
      >
        <ReactFlow
          nodes={nodes}
          onNodesChange={onNodesChange}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onConnectStart={onConnectStart}
          onConnectEnd={onConnectEnd}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          fitView
          nodeOrigin={[0.5, 0]}
          fitViewOptions={{ padding: 2 }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </ReactFlowProvider>
  );
};

export default MindmapFlow;
