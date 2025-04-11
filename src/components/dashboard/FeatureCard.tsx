
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className }: FeatureCardProps) => {
  return (
    <div className={`app-card p-5 flex flex-col ${className}`}>
      <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-1">{description}</p>
      <Button variant="ghost" className="mt-4 p-0 h-auto justify-start gap-2 text-primary">
        Learn more <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default FeatureCard;
