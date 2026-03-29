// filterNode.js — filters data based on a condition
import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "");
  const [field, setField] = useState(data?.field || "");

  return (
    <BaseNode
      id={id}
      title="Filter"
      icon="🔍"
      headerColor="linear-gradient(135deg, #f97316, #facc15)"
      inputs={[{ id: "data", label: "data" }]}
      outputs={[
        { id: "match", label: "match" },
        { id: "no-match", label: "no match" },
      ]}
    >
      <div className="node-field">
        <label className="node-label">Field</label>
        <input
          className="node-input"
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          placeholder="e.g. status"
        />
      </div>
      <div className="node-field">
        <label className="node-label">Condition</label>
        <input
          className="node-input"
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder='e.g. === "active"'
        />
      </div>
    </BaseNode>
  );
};
