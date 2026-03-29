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
      <div className="node-field flex flex-col gap-y-1">
        <label className="node-label text-lg font-semibold text-gray-300">
          Field
        </label>
        <input
          className="node-input text-gray-300 bg-transparent border border-gray-600 rounded px-2 py-1 text-sm w-full"
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          placeholder="e.g. status"
        />
      </div>

      <div className="node-field flex flex-col gap-y-1 mt-4">
        <label className="node-label text-lg font-semibold text-gray-300">
          Condition
        </label>
        <input
          className="node-input text-gray-300 bg-transparent border border-gray-600 rounded px-2 py-1 text-sm w-full"
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder='e.g. === "active"'
        />
      </div>
    </BaseNode>
  );
};
