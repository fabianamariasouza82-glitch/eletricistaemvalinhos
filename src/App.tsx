import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import CopyProtection from "./components/CopyProtection";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Neighborhood from "./pages/Neighborhood";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/servicos"} component={Services} />
      <Route path={"/bairro/:id"} component={Neighborhood} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:id"} component={BlogPost} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <CopyProtection />
          <ScrollToTop />
          <Router />
          <WhatsAppButton />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
