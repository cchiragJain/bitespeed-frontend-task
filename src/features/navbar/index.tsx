import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const handleSaveChanges = (e: React.MouseEvent) => {
    console.log("clicked save changes button header component", e);
  };

  return (
    <div className="flex items-center justify-between bg-red-400 p-3">
      <p>Chatbot Flow Builder</p>
      <Button onClick={handleSaveChanges} variant={"outline"}>
        Save Changes
      </Button>
    </div>
  );
};
