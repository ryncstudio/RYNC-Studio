import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Router, Route, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import WorkPage from "@/pages/WorkPage";
import ServicesPage from "@/pages/ServicesPage";
import TeamPage from "@/pages/TeamPage";
import ContactPage from "@/pages/ContactPage";
import { Navbar } from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop"; // Import the component

// Use hash-based routing (/#/) to support opening index.html directly via file:// protocol
// Tolerant routing: unmatched paths are treated as anchor sections (e.g., /#/services → scroll to #services)
// For in-page anchors, use <Link href="/section"> instead of <a href="#section">
function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <ScrollToTop /> {/* Add ScrollToTop here inside the Router */}
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/work" component={WorkPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/contact" component={ContactPage} />
        {/* Default route handles home and anchor scrolling */}
        <Route path="/:section?">{(params) => <Home targetSection={params.section} />}</Route>
      </Switch>
    </Router>
  );
}

// Note on theming:
// - Choose defaultTheme based on your design (light or dark background)
// - Update the color palette in index.css to match
// - If you want switchable themes, add `switchable` prop and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
