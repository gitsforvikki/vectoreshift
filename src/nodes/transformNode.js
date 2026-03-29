// transformNode.js — applies a transformation/mapping to data
import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(
    data?.transformType || "JSON Parse",
  );

  return (
    <BaseNode
      id={id}
      title="Transform"
      icon="⚡"
      headerColor="linear-gradient(135deg, #a855f7, #6366f1)"
      inputs={[{ id: "input", label: "input" }]}
      outputs={[{ id: "output", label: "output" }]}
    >
      <div className="node-field">
        <label className="node-label">Operation</label>
        <select
          className="node-select"
          value={transformType}
          onChange={(e) => setTransformType(e.target.value)}
        >
          <option value="JSON Parse">JSON Parse</option>
          <option value="JSON Stringify">JSON Stringify</option>
          <option value="To Uppercase">To Uppercase</option>
          <option value="To Lowercase">To Lowercase</option>
          <option value="Trim">Trim Whitespace</option>
          <option value="Base64 Encode">Base64 Encode</option>
          <option value="Base64 Decode">Base64 Decode</option>
        </select>
      </div>
      <p className="node-hint">Transforms data passing through</p>
    </BaseNode>
  );
};
