export enum NodeTypes {
  Text = "text",
}

export interface NodeTypeProps {
  label: string;
  type: NodeTypes;
}
