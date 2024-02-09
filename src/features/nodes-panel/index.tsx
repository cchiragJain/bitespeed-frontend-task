import { NodeTypeProps } from "./types";

import { Node } from "./node";

interface NodesPanelProps {
  nodes: NodeTypeProps[];
}

export const NodesPanel = ({ nodes }: NodesPanelProps) => {
  return (
    <div className="w-1/5">
      <div>Available Nodes</div>
      <div>
        {nodes.map((node) => (
          <Node {...node} />
        ))}
      </div>
    </div>
  );
};
