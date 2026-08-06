import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import About from "@/pages/About";
import WorkPage from "@/pages/WorkPage";
import ServicesPage from "@/pages/ServicesPage";
import TeamPage from "@/pages/TeamPage";
import ContactPage from "@/pages/ContactPage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import PricingPage from "@/pages/PricingPage";

import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import { Navbar } from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { FloatingCTA } from "@/components/FloatingCTA";

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <FloatingCTA />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/work/:slug" component={CaseStudyPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/contact" component={ContactPage} />

        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        {/* Default route handles home and anchor scrolling */}
        <Route path="/:section?">{(params) => <Home targetSection={params.section} />}</Route>
      </Switch>
    </>
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
