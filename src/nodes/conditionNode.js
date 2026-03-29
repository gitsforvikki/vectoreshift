// conditionNode.js — if/else branching logic
import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const ConditionNode = ({ id, data }) => {
  const [expression, setExpression] = useState(data?.expression || "");

  return (
    <BaseNode
      id={id}
      title="Condition"
      icon="🔀"
      headerColor="linear-gradient(135deg, #ec4899, #f43f5e)"
      inputs={[{ id: "value", label: "value" }]}
      outputs={[
        { id: "true", label: "true" },
        { id: "false", label: "false" },
      ]}
    >
      <div className="node-field">
        <label className="node-label">If expression</label>
        <input
          className="node-input"
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="e.g. value > 0"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 4,
        }}
      >
        <span className="node-hint" style={{ color: "#10b981" }}>
          ✓ true
        </span>
        <span className="node-hint" style={{ color: "#ef4444" }}>
          ✗ false
        </span>
      </div>
    </BaseNode>
  );
};
