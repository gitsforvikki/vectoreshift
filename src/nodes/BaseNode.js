// BaseNode.js
// Core abstraction for all node types — Part 1

import { Handle, Position } from 'reactflow';


export const BaseNode = ({
  id,
  title,
  icon = '⚙️',
  headerColor = 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  inputs = [],
  outputs = [],
  minWidth = 220,
  minHeight = 100,
  children,
  style = {},
}) => {
  return (
    <div
      className="base-node p-5 border border-gray-600 rounded-lg"
      style={{
        minWidth,
        minHeight,
        ...style,
      }}
    >
      {/* Header */}
      <div className="base-node-header px-2 py-1 rounded-lg" style={{ background: headerColor }}>
        <span className="base-node-icon">{icon}</span>
        <span className="base-node-title text-capitalize">{title}</span>
      </div>

      {/* Body */}
      <div className="base-node-body">{children}</div>

      {/* Input Handles (left side) */}
      {inputs.map((handle, idx) => (
        <div key={handle.id}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-${handle.id}`}
            style={{
              top: inputs.length === 1
                ? '50%'
                : `${((idx + 1) / (inputs.length + 1)) * 100}%`,
              background: '#6366f1',
              border: '2px solid #fff',
              width: 10,
              height: 10,
              ...handle.style,
            }}
          />
          {handle.label && (
            <div
              className="handle-label handle-label-left text-gray-300"
              style={{
                top: inputs.length === 1
                  ? 'calc(50% - 8px)'
                  : `calc(${((idx + 1) / (inputs.length + 1)) * 100}% - 8px)`,
              }}
            >
              {handle.label}
            </div>
          )}
        </div>
      ))}

      {/* Output Handles (right side) */}
      {outputs.map((handle, idx) => (
        <div key={handle.id}>
          <Handle
            type="source"
            position={Position.Right}
            id={`${id}-${handle.id}`}
            style={{
              top: outputs.length === 1
                ? '50%'
                : `${((idx + 1) / (outputs.length + 1)) * 100}%`,
              background: '#10b981',
              border: '2px solid #fff',
              width: 10,
              height: 10,
              ...handle.style,
            }}
          />
          {handle.label && (
            <div
              className="handle-label handle-label-right text-gray-300"
              style={{
                top: outputs.length === 1
                  ? 'calc(50% - 8px)'
                  : `calc(${((idx + 1) / (outputs.length + 1)) * 100}% - 8px)`,
              }}
            >
              {handle.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};