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
      <div className="node-field flex flex-col gap-y-1">
        <label className="node-label text-lg font-semibold text-gray-300">
          If expression
        </label>
        <input
          className="node-input text-gray-300 bg-transparent border border-gray-600 rounded px-2 py-1 text-sm w-full"
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          placeholder="e.g. value > 0"
        />
      </div>

      <div className="flex justify-between mt-4">
        <span className="node-hint text-sm font-medium text-emerald-400">
          ✓ true
        </span>
        <span className="node-hint text-sm font-medium text-rose-400">
          ✗ false
        </span>
      </div>
    </BaseNode>
  );
};
