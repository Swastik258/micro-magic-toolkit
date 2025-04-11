
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Copy } from "lucide-react";
import { toast } from "sonner";

const ColorPalette = () => {
  const [colors, setColors] = useState([
    "#6366F1", // Indigo
    "#14B8A6", // Teal
    "#8B5CF6", // Purple
    "#F97316", // Orange
    "#EC4899"  // Pink
  ]);

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generatePalette = () => {
    const newColors = Array(5).fill(0).map(() => generateRandomColor());
    setColors(newColors);
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    toast.success(`Copied ${color} to clipboard!`);
  };

  return (
    <div className="app-card p-4 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Color Palette</h3>
        <Button size="sm" onClick={generatePalette}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Generate
        </Button>
      </div>
      
      <div className="grid grid-cols-5 gap-2 mb-4 h-24">
        {colors.map((color, index) => (
          <div 
            key={index}
            className="rounded-md cursor-pointer relative group overflow-hidden"
            style={{ backgroundColor: color }}
            onClick={() => copyColor(color)}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all">
              <Copy className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {colors.map((color, index) => (
          <div key={index} className="text-center">
            <span className="text-xs font-mono">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
