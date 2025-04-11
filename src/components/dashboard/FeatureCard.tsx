
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const FeatureCard = ({ title, description, icon, className, onClick }: FeatureCardProps) => {
  // Find the corresponding tool in the utility grid based on the title
  const getToolId = () => {
    const titleToToolMap: Record<string, string> = {
      "Note Taking": "quicknote",
      "Pomodoro Timer": "pomodoro",
      "Password Generator": "password",
      "Color Palette": "palette",
      "URL Shortener": "url"
    };

    return titleToToolMap[title] || "";
  };

  const toolId = getToolId();
  
  return (
    <div 
      className={`app-card p-5 flex flex-col ${className} hover:shadow-md transition-shadow cursor-pointer`}
      onClick={onClick}
    >
      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-1">{description}</p>
      
      {toolId ? (
        <Button 
          variant="ghost" 
          className="mt-4 p-0 h-auto justify-start gap-2 text-primary"
          asChild
        >
          <Link to={`#${toolId}`}>
            Use tool <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="ghost" className="mt-4 p-0 h-auto justify-start gap-2 text-primary">
          Learn more <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default FeatureCard;
