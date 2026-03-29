// submit.js — Sends pipeline to backend with Tailwind styling

import { useStore } from "./store";
import { shallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const { num_nodes, num_edges, is_dag } = data;

      alert(
        `✅ Pipeline Analysis\n\n` +
          `📦 Nodes:   ${num_nodes}\n` +
          `🔗 Edges:   ${num_edges}\n` +
          `🔁 Is DAG:  ${is_dag ? "Yes — no cycles detected" : "No — cycles found!"}`,
      );
    } catch (err) {
      alert(`❌ Failed to submit pipeline:\n${err.message}`);
    }
  };

  return (
    <div className="submit-bar flex items-center justify-center py-3 md:py-4 px-4 bg-gradient-to-r from-[#1a1f3a] via-[#1e2a4a] to-[#1a1f3a] border-t border-[#3d4563] flex-shrink-0 w-full shadow-lg" style={{backdropFilter: 'blur(10px)'}}>
      <button
        className="submit-btn flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-[#a855f7] to-[#7c3aed] hover:from-[#c084fc] hover:to-[#a855f7] border-none rounded-lg text-white text-sm md:text-base font-bold tracking-wider cursor-pointer transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[rgba(168,85,247,0.4)] active:scale-100 shadow-lg shadow-[rgba(168,85,247,0.3)]"
        onClick={handleSubmit}
      >
        <span className="submit-btn-icon text-xs md:text-sm">▶</span>
        <span className="hidden sm:inline">Submit Pipeline</span>
        <span className="sm:hidden">Submit</span>
      </button>
    </div>
  );
};
