
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PomodoroPage from "./pages/tools/PomodoroPage";
import NotesPage from "./pages/tools/NotesPage";
import PasswordPage from "./pages/tools/PasswordPage";
import ColorPalettePage from "./pages/tools/ColorPalettePage";
import URLShortenerPage from "./pages/tools/URLShortenerPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pomodoro" element={<PomodoroPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/password" element={<PasswordPage />} />
          <Route path="/palette" element={<ColorPalettePage />} />
          <Route path="/url-shortener" element={<URLShortenerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
