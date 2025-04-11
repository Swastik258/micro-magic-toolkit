
import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set sidebar state based on mobile detection
    setIsSidebarOpen(!isMobile);
    
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main 
          className={`flex-1 p-4 transition-all duration-300 ${
            isMobile ? "ml-0" : (isSidebarOpen ? "ml-64" : "ml-0")
          }`}
        >
          {isLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-muted rounded w-1/4 mb-8"></div>
              <div className="h-[400px] bg-muted rounded w-full"></div>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
};

export default Layout;
