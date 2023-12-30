"use client";

import React, { useCallback, useEffect, useRef } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from "reactflow";
import "reactflow/dist/style.css";

import TextUpdaterNode from "./TextUpdateNode.js";

import "./flow.css";
let id = 1;
const getId = () => `${id++}`;
const nodeTypes = { textUpdater: TextUpdaterNode };

const AddNodeOnEdgeDrop = ({ data }) => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(data.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(data.edges);
  const mindmapData = { nodes, edges };
  sessionStorage.setItem("mapdata", JSON.stringify(mindmapData));

  const { screenToFlowPosition } = useReactFlow();

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
          type: "textUpdater",
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

  const onNodesDelete = useCallback(
    (deleted) => {
      console.log(deleted);
      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);
          console.log(connectedEdges);
          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          const newEdges = [...remainingEdges, ...createdEdges];
          const uniqueEdges = newEdges.reduce((acc, curr) => {
            if (!acc.find((edge) => edge.id === curr.id)) acc.push(curr);
            return acc;
          }, []);
          return uniqueEdges;
        }, edges)
      );
    },
    [nodes, edges]
  );

  const onEdgesDelete = useCallback(
    (deleted) => {
      const targetNodes = nodes.filter(
        (node) => +node.id === +deleted[0].target
      );
      setNodes((nodes) =>
        nodes.filter((node) => +node.id !== +deleted[0].target)
      );
      setEdges(
        targetNodes.reduce((acc, node) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );
          const newEdges = [...remainingEdges, ...createdEdges];
          const uniqueEdges = newEdges.reduce((acc, curr) => {
            if (!acc.find((edge) => edge.id === curr.id)) acc.push(curr);
            return acc;
          }, []);
          return uniqueEdges;
        }, edges)
      );
    },
    [nodes, edges]
  );
  useEffect(() => {
    if (window) {
      sessionStorage.setItem("mapdata", JSON.stringify(mindmapData));
    }
  }, []);
  return (
    <div
      className="wrapper"
      ref={reactFlowWrapper}
      style={{ width: "100%", height: 500 }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        deleteKeyCode={["Backspace", "Delete"]}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        nodeTypes={nodeTypes}
        onConnectEnd={onConnectEnd}
        onNodesDelete={onNodesDelete}
        onEdgesDelete={onEdgesDelete}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
      >
        <Background variant="dots" gap={12} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

const MindmapFlowCustom = ({ data }) => {
  return (
    <ReactFlowProvider>
      <AddNodeOnEdgeDrop data={data} />
    </ReactFlowProvider>
  );
};
export default MindmapFlowCustom;
