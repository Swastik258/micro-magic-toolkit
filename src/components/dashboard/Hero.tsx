
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");
  
  return (
    <div className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-8 mb-8">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">GRK TRAINING</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">All the tools you need <br />in one place</h1>
        
        <p className="text-muted-foreground mb-6">
          MicroMagic helps you get more done with less effort. Our suite of micro-tools 
          is designed to streamline your workflow and boost your productivity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Explore Features
          </Button>
        </div>
      </div>
      
      {/* Floating elements in the background */}
      <div className="hidden md:block absolute -top-8 right-4 w-24 h-24 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "0s" }}></div>
      <div className="hidden md:block absolute bottom-12 right-12 w-16 h-16 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="hidden md:block absolute top-20 right-24 w-12 h-12 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "2s" }}></div>
    </div>
  );
};

export default Hero;
