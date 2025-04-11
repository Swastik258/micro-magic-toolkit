
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
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon, label, to, isActive = false, onClick }: SidebarItemProps) => {
  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={`w-full justify-start gap-3 ${isActive ? "" : "hover:bg-accent/10"}`}
      asChild
      onClick={onClick}
    >
      <Link to={to}>
        {icon}
        <span>{label}</span>
      </Link>
    </Button>
  );
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const currentPath = location.pathname;
  
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
            <SidebarItem 
              icon={<LayoutDashboard className="h-5 w-5" />} 
              label="Dashboard" 
              to="/"
              isActive={currentPath === '/'} 
              onClick={isMobile ? onClose : undefined}
            />
            <SidebarItem 
              icon={<FileText className="h-5 w-5" />} 
              label="Notes" 
              to="/notes"
              isActive={currentPath === '/notes'}
              onClick={isMobile ? onClose : undefined}
            />
            <SidebarItem 
              icon={<Clock className="h-5 w-5" />} 
              label="Pomodoro" 
              to="/pomodoro"
              isActive={currentPath === '/pomodoro'}
              onClick={isMobile ? onClose : undefined}
            />
            <SidebarItem 
              icon={<Lock className="h-5 w-5" />} 
              label="Password Gen" 
              to="/password"
              isActive={currentPath === '/password'}
              onClick={isMobile ? onClose : undefined}
            />
            <SidebarItem 
              icon={<Palette className="h-5 w-5" />} 
              label="Color Palette" 
              to="/palette"
              isActive={currentPath === '/palette'}
              onClick={isMobile ? onClose : undefined}
            />
            <SidebarItem 
              icon={<LinkIcon className="h-5 w-5" />} 
              label="URL Shortener" 
              to="/url-shortener"
              isActive={currentPath === '/url-shortener'}
              onClick={isMobile ? onClose : undefined}
            />
          </div>
          
          <div className="mt-auto">
            <SidebarItem icon={<Settings className="h-5 w-5" />} label="Settings" to="/settings" />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
