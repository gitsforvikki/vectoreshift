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
      <div className="node-field flex flex-col gap-y-1">
        <label className="node-label text-lg font-semibold text-gray-300">
          Operation
        </label>
        <select
          className="node-select bg-transparent text-gray-300 border border-gray-600 rounded px-2 py-1 text-sm w-full"
          value={transformType}
          onChange={(e) => setTransformType(e.target.value)}
        >
          <option value="JSON Parse" className="bg-gray-700 text-white">
            JSON Parse
          </option>
          <option value="JSON Stringify" className="bg-gray-700 text-white">
            JSON Stringify
          </option>
          <option value="To Uppercase" className="bg-gray-700 text-white">
            To Uppercase
          </option>
          <option value="To Lowercase" className="bg-gray-700 text-white">
            To Lowercase
          </option>
          <option value="Trim" className="bg-gray-700 text-white">
            Trim Whitespace
          </option>
          <option value="Base64 Encode" className="bg-gray-700 text-white">
            Base64 Encode
          </option>
          <option value="Base64 Decode" className="bg-gray-700 text-white">
            Base64 Decode
          </option>
        </select>
      </div>

      <p className="node-hint mt-4 text-sm text-gray-400">
        Transforms data passing through
      </p>
    </BaseNode>
  );
};