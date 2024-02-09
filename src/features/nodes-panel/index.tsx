import { NodeProps } from "./types";

import { Node } from "./node";

interface NodesPanelProps {
  nodes: NodeProps[];
}

export const NodesPanel = ({ nodes }: NodesPanelProps) => {
  return (
    <div className="w-1/5 border-l-2 border-l-red-300 h-full">
      <div className="px-4 py-3 border-b border-b-red-300 flex justify-center items-center">
        Available Nodes
      </div>
      <div className="flex flex-wrap gap-6 p-6">
        {nodes.map((node) => (
          <Node
            id={node.id}
            label={node.label}
            type={node.type}
            key={node.id}
          />
        ))}
      </div>
    </div>
  );
};
