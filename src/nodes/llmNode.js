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
      <div className="node-field">
        <label className="node-label">Model</label>
        <select
          className="node-select"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="gpt-4o">GPT-4o</option>
          <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
          <option value="claude-3-5-sonnet">Claude 3.5 Sonnet</option>
          <option value="gemini-pro">Gemini Pro</option>
        </select>
      </div>
      <p className="node-hint">
        Connects system prompt &amp; user prompt → response
      </p>
    </BaseNode>
  );
};
