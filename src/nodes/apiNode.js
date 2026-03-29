// apiNode.js — calls an external API endpoint
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
      <div className="node-field">
        <label className="node-label">Method</label>
        <select
          className="node-select"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <div className="node-field">
        <label className="node-label">URL</label>
        <input
          className="node-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://api.example.com/..."
        />
      </div>
    </BaseNode>
  );
};
