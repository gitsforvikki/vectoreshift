import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || "");
  const [method, setMethod] = useState(data?.method || "GET");

  return (
    <BaseNode
      id={id}
      title="API Call"
      icon="🌐"
      headerColor="linear-gradient(135deg, #0ea5e9, #6366f1)"
      inputs={[
        { id: "body", label: "body" },
        { id: "headers", label: "headers" },
      ]}
      outputs={[
        { id: "response", label: "response" },
        { id: "error", label: "error" },
      ]}
    >
      <div className="node-field flex flex-col gap-y-1">
        <label className="node-label text-lg font-semibold text-gray-300">
          Method
        </label>
        <select
          className="node-select bg-transparent text-gray-300 border border-gray-600 rounded px-2 py-1 text-sm w-full"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET" className="bg-gray-700 text-white">GET</option>
          <option value="POST" className="bg-gray-700 text-white">POST</option>
          <option value="PUT" className="bg-gray-700 text-white">PUT</option>
          <option value="DELETE" className="bg-gray-700 text-white">DELETE</option>
        </select>
      </div>

      <div className="node-field flex flex-col gap-y-1 mt-4">
        <label className="node-label text-lg font-semibold text-gray-300">
          URL
        </label>
        <input
          className="node-input text-gray-300 bg-transparent border border-gray-600 rounded px-2 py-1 text-sm w-full"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com/..."
        />
      </div>
    </BaseNode>
  );
};