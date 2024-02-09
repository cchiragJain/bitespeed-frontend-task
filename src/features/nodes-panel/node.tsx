import { File } from "./nodes-panel-icons";
import { NodeProps, NodeTypes } from "./types";

const NodePanelIcons = {
  [NodeTypes.Text]: <File />,
};

export const Node = ({ label, type, id }: NodeProps) => {
  return (
    <div
      id={id}
      className="p-6 text-center rounded-sm border border-red-300 flex flex-col items-center gap-4"
    >
      <div>{NodePanelIcons[type]}</div>
      <p>{label}</p>
    </div>
  );
};
