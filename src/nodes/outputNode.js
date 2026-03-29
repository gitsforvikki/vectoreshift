// outputNode.js — refactored with BaseNode abstraction

import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_"),
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Output"
      icon="📤"
      headerColor="linear-gradient(135deg, #f59e0b, #ef4444)"
      inputs={[]}
      outputs={[]}
    >
      <div className="node-field flex gap-x-4 mt-4 items-center">
        <label className="node-label text-gray-300 font-semibold text-lg">
          Name
        </label>
        <input
          className="node-input bg-transparent text-gray-300 border border-gray-600 rounded px-2 py-1 text-sm w-full"
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </div>
      <div className="node-field flex flex-col gap-y-2">
        <label className="node-label text-gray-300 font-semibold text-lg">
          Type
        </label>
        <select
          className="node-select bg-transparent text-gray-300 border border-gray-600 rounded px-2 py-1 text-sm w-full"
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
        >
          <option value="Text" className="bg-gray-600 text-white">
            Text
          </option>
          <option value="Image" className="bg-gray-600 text-white">
            Image
          </option>
        </select>
      </div>
    </BaseNode>
  );
};
