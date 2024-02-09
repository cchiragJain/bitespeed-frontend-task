import { Navbar } from "@/features/navbar";
import { ChatbotFlow } from "./features/chatbot-flow";
import { NodesPanel } from "./features/nodes-panel";
import { NodeTypeProps, NodeTypes } from "./features/nodes-panel/types";

function App() {
  const availableNodes: NodeTypeProps[] = [
    {
      label: "Create Text Message",
      type: NodeTypes.Text,
    },
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <Navbar />
      <div className="flex justify-between">
        <ChatbotFlow />
        <NodesPanel nodes={availableNodes} />
      </div>
    </div>
  );
}

export default App;
