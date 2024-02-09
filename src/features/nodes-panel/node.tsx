import { File } from "./nodes-panel-icons";
import { NodeTypeProps, NodeTypes } from "./types";

const NodePanelIcons = {
  [NodeTypes.Text]: <File />,
};

export const Node = ({ label, type }: NodeTypeProps) => {
  return (
    <div>
      <div>{NodePanelIcons[type]}</div>
      <div>{label}</div>
      <div>{type}</div>
    </div>
  );
};
