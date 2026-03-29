// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow"),
        );
        const type = appData?.nodeType;

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };

        addNode(newNode);
      }
    },
    [reactFlowInstance],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <>
      <div ref={reactFlowWrapper} className="flow-canvas-wrapper flex-1 w-full bg-gradient-to-br from-[#0a0e27] via-[#0f1535] to-[#050709] min-h-[200px]">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
        >
          <Background color="#aaa" gap={gridSize} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </>
  );
};
// ui.js — updated with all 9 node types registered

// import { useState, useRef, useCallback } from 'react';
// import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
// import { useStore } from './store';
// import { shallow } from 'zustand/shallow';

// import { InputNode }     from './nodes/inputNode';
// import { LLMNode }       from './nodes/llmNode';
// import { OutputNode }    from './nodes/outputNode';
// import { TextNode }      from './nodes/textNode';
// import { FilterNode }    from './nodes/filterNode';
// import { APINode }       from './nodes/apiNode';
// import { NoteNode }      from './nodes/noteNode';
// import { TransformNode } from './nodes/transformNode';
// import { ConditionNode } from './nodes/conditionNode';

// import 'reactflow/dist/style.css';

// const gridSize = 20;
// const proOptions = { hideAttribution: true };

// const nodeTypes = {
//   customInput:  InputNode,
//   llm:          LLMNode,
//   customOutput: OutputNode,
//   text:         TextNode,
//   filter:       FilterNode,
//   api:          APINode,
//   note:         NoteNode,
//   transform:    TransformNode,
//   condition:    ConditionNode,
// };

// const selector = (state) => ({
//   nodes:         state.nodes,
//   edges:         state.edges,
//   getNodeID:     state.getNodeID,
//   addNode:       state.addNode,
//   onNodesChange: state.onNodesChange,
//   onEdgesChange: state.onEdgesChange,
//   onConnect:     state.onConnect,
// });

// export const PipelineUI = () => {
//   const reactFlowWrapper = useRef(null);
//   const [reactFlowInstance, setReactFlowInstance] = useState(null);
//   const {
//     nodes, edges, getNodeID, addNode,
//     onNodesChange, onEdgesChange, onConnect,
//   } = useStore(selector, shallow);

//   const getInitNodeData = (nodeID, type) => ({ id: nodeID, nodeType: type });

//   const onDrop = useCallback(
//     (event) => {
//       event.preventDefault();
//       const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//       if (event?.dataTransfer?.getData('application/reactflow')) {
//         const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
//         const type = appData?.nodeType;
//         if (!type) return;

//         const position = reactFlowInstance.project({
//           x: event.clientX - reactFlowBounds.left,
//           y: event.clientY - reactFlowBounds.top,
//         });

//         const nodeID = getNodeID(type);
//         addNode({ id: nodeID, type, position, data: getInitNodeData(nodeID, type) });
//       }
//     },
//     [reactFlowInstance]
//   );

//   const onDragOver = useCallback((event) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
//   }, []);

//   return (
//     <div ref={reactFlowWrapper} className="flow-canvas">
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         onDrop={onDrop}
//         onDragOver={onDragOver}
//         onInit={setReactFlowInstance}
//         nodeTypes={nodeTypes}
//         proOptions={proOptions}
//         snapGrid={[gridSize, gridSize]}
//         connectionLineType="smoothstep"
//         fitView
//       >
//         <Background color="#334155" gap={gridSize} size={1} />
//         <Controls />
//         <MiniMap
//           nodeColor={(n) => {
//             const colors = {
//               customInput: '#3b82f6', customOutput: '#f59e0b',
//               llm: '#8b5cf6', text: '#10b981', filter: '#f97316',
//               api: '#0ea5e9', note: '#fbbf24', transform: '#a855f7',
//               condition: '#ec4899',
//             };
//             return colors[n.type] || '#6366f1';
//           }}
//           style={{ background: '#1e293b', border: '1px solid #334155' }}
//         />
//       </ReactFlow>
//     </div>
//   );
// };
