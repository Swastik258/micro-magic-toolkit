
import Layout from "@/components/layout/Layout";
import Hero from "@/components/dashboard/Hero";
import UtilityGrid from "@/components/dashboard/UtilityGrid";
import FeatureCard from "@/components/dashboard/FeatureCard";
import { FileText, Clock, Lock, Palette, Link, LayoutGrid } from "lucide-react";
import { useRef } from "react";

const Index = () => {
  const toolsRef = useRef<HTMLDivElement>(null);
  
  const scrollToTool = (toolId: string) => {
    const element = document.getElementById(toolId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTools = () => {
    if (toolsRef.current) {
      toolsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Hero />
      
      <div ref={toolsRef} className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Your Tools</h2>
        <UtilityGrid />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-6">Available Micro-Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Note Taking"
            description="Quickly jot down ideas and thoughts with our minimalist note-taking tool."
            icon={<FileText className="h-6 w-6" />}
            onClick={() => scrollToTool('quicknote')}
          />
          <FeatureCard
            title="Pomodoro Timer"
            description="Boost your productivity with the time-tested Pomodoro technique."
            icon={<Clock className="h-6 w-6" />}
            onClick={() => scrollToTool('pomodoro')}
          />
          <FeatureCard
            title="Password Generator"
            description="Create strong, secure passwords with our easy-to-use password generator."
            icon={<Lock className="h-6 w-6" />}
            onClick={() => scrollToTool('password')}
          />
          <FeatureCard
            title="Color Palette"
            description="Generate beautiful color palettes for your design projects."
            icon={<Palette className="h-6 w-6" />}
            onClick={() => scrollToTool('palette')}
          />
          <FeatureCard
            title="URL Shortener"
            description="Shorten long URLs for easier sharing and tracking."
            icon={<Link className="h-6 w-6" />}
            onClick={() => scrollToTool('url')}
          />
          <FeatureCard
            title="Coming Soon"
            description="More micro-tools are on the way. Subscribe to get notified when they launch."
            icon={<LayoutGrid className="h-6 w-6" />}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
