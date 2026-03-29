// textNode.js — with auto-resize + dynamic {{variable}} handles (Part 3)

import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";

// Extracts valid JS variable names from {{varName}} patterns
const extractVariables = (text) => {
  const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    vars.add(match[1]);
  }
  return [...vars];
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [nodeSize, setNodeSize] = useState({ width: 220, height: 120 });
  const textareaRef = useRef(null);

  // Dynamically extract variables from text
  const variables = extractVariables(currText);

  // Auto-resize: expand node as text grows
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to get accurate scrollHeight
      textareaRef.current.style.height = "auto";
      const scrollH = textareaRef.current.scrollHeight;
      const newHeight = Math.max(120, scrollH + 80); // 80px for header + padding
      const newWidth = Math.max(220, Math.min(500, currText.length * 8 + 60));
      setNodeSize({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  return (
    <div style={{ position: "relative" }}>
      <BaseNode
        id={id}
        title="Text"
        icon="📝"
        headerColor="linear-gradient(135deg, #10b981, #14b8a6)"
        inputs={[]} // dynamic handles added below, not through BaseNode
        outputs={[{ id: "output", label: "out" }]}
        minWidth={nodeSize.width}
        minHeight={nodeSize.height}
      >
        <div className="node-field">
          <label className="node-label">Content</label>
          <textarea
            ref={textareaRef}
            className="node-textarea"
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            placeholder="Type text... use {{variableName}} to add inputs"
            rows={3}
            style={{ width: "100%", resize: "none", overflow: "hidden" }}
          />
        </div>

        {/* Variable chips preview */}
        {variables.length > 0 && (
          <div className="variable-chips">
            {variables.map((v) => (
              <span key={v} className="variable-chip">
                {`{{${v}}}`}
              </span>
            ))}
          </div>
        )}
      </BaseNode>

      {/* Dynamic variable Handles — rendered outside BaseNode to control positioning */}
      {variables.map((varName, idx) => (
        <div key={varName}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${varName}`}
            style={{
              top: `${((idx + 1) / (variables.length + 1)) * 100}%`,
              background: "#f59e0b",
              border: "2px solid #fff",
              width: 10,
              height: 10,
              left: -5,
              position: "absolute",
            }}
          />
          <div
            className="handle-label handle-label-left"
            style={{
              top: `calc(${((idx + 1) / (variables.length + 1)) * 100}% - 8px)`,
              left: 8,
              position: "absolute",
              fontSize: "9px",
              color: "#f59e0b",
              fontWeight: 600,
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {varName}
          </div>
        </div>
      ))}
    </div>
  );
};
