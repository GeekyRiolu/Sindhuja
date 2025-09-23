import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StoryIntroPage from "./pages/StoryIntroPage";
import ChapterOnePage from "./pages/ChapterOnePage";
import ChapterTwoPage from "./pages/ChapterTwoPage";
import ChapterThreePage from "./pages/ChapterThreePage";
import EpiloguePage from "./pages/EpiloguePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoryIntroPage />} />
          <Route path="/chapter-one" element={<ChapterOnePage />} />
          <Route path="/chapter-two" element={<ChapterTwoPage />} />
          <Route path="/chapter-three" element={<ChapterThreePage />} />
          <Route path="/epilogue" element={<EpiloguePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
