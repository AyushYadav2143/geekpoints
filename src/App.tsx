
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "@/contexts/GlobalContext";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import LeaderboardPage from "@/pages/LeaderboardPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <ParticleBackground />
            <Navbar />
            <main className="flex-grow pt-20 pb-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </GlobalProvider>
  </QueryClientProvider>
);

export default App;
