// llmNode.js — refactored with BaseNode abstraction

import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || "gpt-4o");

  return (
    <BaseNode
      id={id}
      title="LLM"
      icon="🧠"
      headerColor="linear-gradient(135deg, #8b5cf6, #ec4899)"
      inputs={[
        { id: "system", label: "system" },
        { id: "prompt", label: "prompt" },
      ]}
      outputs={[{ id: "response", label: "response" }]}
    >
      <div className="node-field flex gap-x-4 mt-4 items-center">
        <label className="node-label text-xl font-semibold text-gray-300">Model</label>
        <select
          className="node-select rounded-md bg-transparent text-gray-300 border border-gray-600 px-2 py-1 text-sm"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="gpt-4o" className="text-white bg-gray-600">GPT-4o</option>
          <option value="gpt-3.5-turbo" className="text-white bg-gray-600">GPT-3.5 Turbo</option>
          <option value="claude-3-5-sonnet" className="text-white bg-gray-600">Claude 3.5 Sonnet</option>
          <option value="gemini-pro" className="text-white bg-gray-600">Gemini Pro</option>
        </select>
      </div>
      <p className="node-hint text-gray-300 italic text-sm mt-3">
       Hint: Connects system prompt &amp; user prompt → response
      </p>
    </BaseNode>
  );
};
