import { Navbar } from "@/features/navbar";
import { ChatbotFlow } from "./features/chatbot-flow";
import { NodesPanel } from "./features/nodes-panel";
import { NodeProps, NodeTypes } from "./features/nodes-panel/types";

function App() {
  const availableNodes: NodeProps[] = [
    {
      label: "Create Text Message",
      type: NodeTypes.Text,
      id: "0258e16d-a341-4afb-9dfa-7ce0dff0d07c",
    },
    {
      label: "Dummy",
      type: NodeTypes.Text,
      id: "aaaa--bbb",
    },
    {
      label: "Dummy",
      type: NodeTypes.Text,
      id: "aaaa--bbbb",
    },
  ];

  return (
    <div className="max-h-screen w-full flex flex-col">
      <Navbar />
      <div className="flex justify-between">
        <ChatbotFlow />
        <NodesPanel nodes={availableNodes} />
      </div>
    </div>
  );
}

export default App;
