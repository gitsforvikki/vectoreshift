import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Input"
      icon="📥"
      headerColor="linear-gradient(135deg, #3b82f6, #06b6d4)"
      inputs={[]}
      outputs={[{ id: "value", label: "out" }]}
    >
      <div className="node-field flex flex-col gap-y-1">
        <label className="node-label text-xl font-semibold text-gray-300">
          Name
        </label>

        {inputType === "Text" ? (
          <input
            className="node-input text-gray-300 bg-transparent border border-gray-600 rounded px-2 py-1 text-sm w-full"
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        ) : (
          <input
            className="node-input text-gray-300 bg-transparent border border-gray-600 rounded px-2 py-1 text-sm w-full file:text-sm file:text-white file:bg-gray-700 file:border-0 file:px-3 file:py-1 file:rounded"
            type="file"
            onChange={(e) => console.log(e.target.files[0])}
          />
        )}
      </div>

      <div className="node-field flex gap-x-3 mt-4 items-center">
        <label className="node-label text-lg text-gray-300">Type</label>
        <select
          className="node-select bg-transparent text-gray-300 border border-gray-600 rounded px-2 py-1 text-sm"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text" className="text-white bg-gray-600">
            Text
          </option>
          <option value="File" className="bg-gray-600 text-white">
            File
          </option>
        </select>
      </div>
    </BaseNode>
  );
};
