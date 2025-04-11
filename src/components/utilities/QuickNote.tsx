
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Save, X } from "lucide-react";
import { toast } from "sonner";

const QuickNote = () => {
  const [note, setNote] = useState("");

  const saveNote = () => {
    if (note.trim()) {
      // In a real app, you'd save this to a database
      localStorage.setItem("quickNote", note);
      toast.success("Note saved successfully!");
    } else {
      toast.error("Cannot save empty note");
    }
  };

  return (
    <div className="app-card p-4 flex flex-col h-full">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg">Quick Note</h3>
        <div className="flex gap-1">
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-8 w-8 p-0" 
            onClick={() => setNote("")}
          >
            <X className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            className="h-8 w-8 p-0" 
            onClick={saveNote}
          >
            <Save className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Textarea
        placeholder="Type your thoughts here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="flex-1 resize-none"
      />
    </div>
  );
};

export default QuickNote;
