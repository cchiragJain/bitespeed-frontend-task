import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { ToasterProvider } from './components/toaster-provider';

function App() {
  return (
    <div>
      <ToasterProvider/>
      <Button variant={'destructive'} onClick={() => toast.error("hello")}>Hello Click Me</Button>
    </div>
  )
}

export default App;