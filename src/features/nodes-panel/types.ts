export enum NodeTypes {
  Text = "text",
}

export interface NodeProps {
  label: string;
  type: NodeTypes;
  id: string;
}
