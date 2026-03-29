// noteNode.js — a sticky-note style annotation node (no handles)
import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || "Add a note...");
  const [currName, setCurrName] = useState(data?.currName || "");
  const [inputType, setInputType] = useState(data?.inputType || "Text");
  return (
    <BaseNode
      id={id}
      title="Note"
      icon="🗒️"
      headerColor="linear-gradient(135deg, #fbbf24, #f59e0b)"
      inputs={[]}
      outputs={[]}
      minWidth={200}
    >
      <div className="node-field flex flex-col gap-y-1">
        <label className="node-label text-xl font-semibold text-gray-300">
          Name
        </label>
        <input
          className="node-input text-gray-300 bg-transparent border border-gray-600 rounded px-2 py-1 text-sm w-full"
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
        />
      </div>
      <div className="node-field flex gap-x-3 mt-4 items-center">
        <label className="node-label text-lg text-gray-300">Type</label>
        <select
          className="node-select bg-transparent text-gray-300 border border-gray-600 rounded px-2 py-1 text-sm"
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
        >
          <option value="Text" className="bg-gray-600 text-white">
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
