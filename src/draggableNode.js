// draggableNode.js — Responsive draggable nodes with Tailwind CSS

export const DraggableNode = ({
  type,
  label,
  icon = "⚙️",
  color = "#6366f1",
}) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="draggable-node flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all user-select-none cursor-grab active:cursor-grabbing bg-[#252d4a] border border-[#3d4563] hover:border-opacity-100 hover:scale-110 hover:shadow-lg hover:shadow-[rgba(168,85,247,0.3)] flex-shrink-0"
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
      style={{
        "--node-color": color,
        borderColor: color,
        background: `linear-gradient(135deg, ${color}15 0%, transparent 100%)`,
      }}
    >
      <span className="draggable-node-icon text-xs md:text-sm">{icon}</span>
      <span className="draggable-node-label text-xs font-semibold text-white whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};
