import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";


// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const Homes = lazy(() => import("./pages/Homes"));
const Genesis = lazy(() => import("./pages/AboutUs"));
const Bangalore = lazy(() => import("./pages/homes/Bangalore"));
const Bhadrachalam = lazy(() => import("./pages/homes/Bhadrachalam"));
const Raibag = lazy(() => import("./pages/homes/Raibag"));
const Ambur = lazy(() => import("./pages/homes/Ambur"));
const Jeevanahalli = lazy(() => import("./pages/homes/Jeevanahalli"));
const ElderCare = lazy(() => import("./pages/ElderCare"));
const SpecialCare = lazy(() => import("./pages/SpecialCare"));
const JordanCommunity = lazy(() => import("./pages/JordanCommunity"));
const ChurchPlanting = lazy(() => import("./pages/ChurchPlanting"));
const TheologicalSeminary = lazy(() => import("./pages/TheologicalSeminary"));
const Donate = lazy(() => import("./pages/Donate"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div></div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/genesis" element={<Genesis />} />
            <Route path="/homes" element={<Homes />} />
            <Route path="/homes/bangalore" element={<Bangalore />} />
            <Route path="/homes/bhadrachalam" element={<Bhadrachalam />} />
            <Route path="/homes/raibag" element={<Raibag />} />
            <Route path="/homes/ambur" element={<Ambur />} />
            <Route path="/homes/jeevanahalli" element={<Jeevanahalli />} />
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;