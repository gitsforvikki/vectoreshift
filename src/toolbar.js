// toolbar.js — Responsive toolbar with Tailwind CSS

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="toolbar flex items-center gap-4 md:gap-5 lg:gap-8 px-4 sm:px-4 md:px-5 py-3 md:py-4 bg-gradient-to-r from-[#1a1f3a] via-[#1e2a4a] to-[#1a1f3a] border-b border-[#3d4563] flex-wrap w-full flex-shrink-0 z-50 shadow-lg" style={{backdropFilter: 'blur(10px)'}}>
      <div className="toolbar-brand flex items-center gap-2 flex-shrink-0">
        <span className="toolbar-logo text-xl md:text-2xl">⚡</span>
        <span className="toolbar-name text-sm md:text-base font-bold tracking-wider text-white hidden sm:inline bg-gradient-to-r from-[#a855f7] to-[#c084fc] bg-clip-text text-transparent">VectorShift</span>
      </div>
      <div className="toolbar-nodes flex items-center gap-3 flex-1 min-w-0 overflow-x-auto -webkit-overflow-scrolling-touch scroll-smooth">
        <span className="toolbar-section-label text-[9px] font-bold tracking-widest text-[#8892b0] uppercase flex-shrink-0">NODES</span>
        <div className="toolbar-node-list flex flex-nowrap gap-2 pr-2">
          <DraggableNode
            type="customInput"
            label="Input"
            icon="📥"
            color="#3b82f6"
          />
          <DraggableNode
            type="customOutput"
            label="Output"
            icon="📤"
            color="#f59e0b"
          />
          <DraggableNode type="llm" label="LLM" icon="🧠" color="#8b5cf6" />
          <DraggableNode type="text" label="Text" icon="📝" color="#10b981" />
          <DraggableNode
            type="filter"
            label="Filter"
            icon="🔍"
            color="#f97316"
          />
          <DraggableNode
            type="api"
            label="API Call"
            icon="🌐"
            color="#0ea5e9"
          />
          <DraggableNode type="note" label="Note" icon="🗒️" color="#fbbf24" />
          <DraggableNode
            type="transform"
            label="Transform"
            icon="⚡"
            color="#a855f7"
          />
          <DraggableNode
            type="condition"
            label="Condition"
            icon="🔀"
            color="#ec4899"
          />
        </div>
      </div>
    </div>
  );
};
