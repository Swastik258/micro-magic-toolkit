
import { useState, useEffect } from "react";
import QuickNote from "../utilities/QuickNote";
import PomodoroTimer from "../utilities/PomodoroTimer";
import PasswordGenerator from "../utilities/PasswordGenerator";
import ColorPalette from "../utilities/ColorPalette";
import LinkShortener from "../utilities/LinkShortener";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";

const UtilityGrid = () => {
  const isMobile = useIsMobile();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading state for demonstration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const ToolWrapper = ({ id, children }: { id: string, children: React.ReactNode }) => (
    <div id={id} className={`bg-card rounded-lg shadow-sm border border-border/60 h-full overflow-hidden`}>
      {loading ? (
        <div className="p-4 h-full flex flex-col">
          <Skeleton className="h-8 w-[180px] mb-4" />
          <Skeleton className="flex-1 w-full" />
        </div>
      ) : (
        children
      )}
    </div>
  );
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="md:col-span-2 lg:col-span-1 h-96">
        <ToolWrapper id="pomodoro">
          <PomodoroTimer />
        </ToolWrapper>
      </div>
      
      <div className="h-96">
        <ToolWrapper id="quicknote">
          <QuickNote />
        </ToolWrapper>
      </div>
      
      <div className="h-96">
        <ToolWrapper id="password">
          <PasswordGenerator />
        </ToolWrapper>
      </div>
      
      <div className="h-96">
        <ToolWrapper id="palette">
          <ColorPalette />
        </ToolWrapper>
      </div>
      
      <div className="md:col-span-2 h-96">
        <ToolWrapper id="url">
          <LinkShortener />
        </ToolWrapper>
      </div>
    </div>
  );
};

export default UtilityGrid;
