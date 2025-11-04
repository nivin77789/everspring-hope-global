import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // 👈 add this import

import Index from "./pages/Index";
import Homes from "./pages/Homes";
import Genesis from "./pages/AboutUs";
import Bangalore from "./pages/homes/Bangalore";
import Bhadrachalam from "./pages/homes/Bhadrachalam";
import Raibag from "./pages/homes/Raibag";
import Ambur from "./pages/homes/Ambur";
import ElderCare from "./pages/ElderCare";
import SpecialCare from "./pages/SpecialCare";
import JordanCommunity from "./pages/JordanCommunity";
import ChurchPlanting from "./pages/ChurchPlanting";
import TheologicalSeminary from "./pages/TheologicalSeminary";
import Donate from "./pages/Donate";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
  <ScrollToTop />  {/* 👈 Add this line */}
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/genesis" element={<Genesis />} />
    <Route path="/homes" element={<Homes />} />
    <Route path="/homes/bangalore" element={<Bangalore />} />
    <Route path="/homes/bhadrachalam" element={<Bhadrachalam />} />
    <Route path="/homes/raibag" element={<Raibag />} />
    <Route path="/homes/ambur" element={<Ambur />} />
    <Route path="/elder-care" element={<ElderCare />} />
    <Route path="/special-care" element={<SpecialCare />} />
    <Route path="/jordan-community" element={<JordanCommunity />} />
    <Route path="/church-planting" element={<ChurchPlanting />} />
    <Route path="/theological-seminary" element={<TheologicalSeminary />} />
    <Route path="/donate" element={<Donate />} />
    <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;