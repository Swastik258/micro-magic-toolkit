
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  FileText, 
  Home, 
  LinkIcon, 
  Lock, 
  Palette, 
  Settings,
  LayoutDashboard,
  X 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarItem = ({ icon, label, isActive = false }: SidebarItem) => {
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={`w-full justify-start gap-3 ${isActive ? "" : "hover:bg-accent/10"}`}
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const isMobile = useIsMobile();
  
  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        ></div>
      )}
      
      <aside
        className={`
          fixed top-0 left-0 h-full bg-card border-r border-border/60 z-50
          transition-all duration-300 ease-in-out
          ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
          ${isMobile ? "w-72" : "w-64"}
        `}
      >
        <div className="flex flex-col h-full p-4">
          {isMobile && (
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold gradient-text">MicroMagic</h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          )}
          
          <div className="flex flex-col gap-1.5">
            <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} label="Dashboard" isActive />
            <SidebarItem icon={<FileText className="h-5 w-5" />} label="Notes" />
            <SidebarItem icon={<Clock className="h-5 w-5" />} label="Pomodoro" />
            <SidebarItem icon={<Lock className="h-5 w-5" />} label="Password Gen" />
            <SidebarItem icon={<Palette className="h-5 w-5" />} label="Color Palette" />
            <SidebarItem icon={<LinkIcon className="h-5 w-5" />} label="URL Shortener" />
          </div>
          
          <div className="mt-auto">
            <SidebarItem icon={<Settings className="h-5 w-5" />} label="Settings" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
