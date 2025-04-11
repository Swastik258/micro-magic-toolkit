
import QuickNote from "../utilities/QuickNote";
import PomodoroTimer from "../utilities/PomodoroTimer";
import PasswordGenerator from "../utilities/PasswordGenerator";
import ColorPalette from "../utilities/ColorPalette";
import LinkShortener from "../utilities/LinkShortener";
import { useIsMobile } from "@/hooks/use-mobile";

const UtilityGrid = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div id="pomodoro" className="md:col-span-2 lg:col-span-1 h-96">
        <PomodoroTimer />
      </div>
      
      <div id="quicknote" className="h-96">
        <QuickNote />
      </div>
      
      <div id="password" className="h-96">
        <PasswordGenerator />
      </div>
      
      <div id="palette" className="h-96">
        <ColorPalette />
      </div>
      
      <div id="url" className="md:col-span-2 h-96">
        <LinkShortener />
      </div>
    </div>
  );
};

export default UtilityGrid;
