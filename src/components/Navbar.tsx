import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" }, // Route
  { name: "Services", href: "/services" }, // Route
  { name: "Team", href: "/team" }, // Replaced Pricing with Team
  { name: "Contact", href: "/contact" }, // Added Contact
];

export function Navbar() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if a link is active
  const isActive = (href: string) => {
    // Exact match for routes
    if ((href === "/about" && location === "/about") || 
        (href === "/work" && location === "/work") ||
        (href === "/services" && location === "/services") ||
        (href === "/team" && location === "/team")) return true;
    
    return false;
  };

  const isPage = location === "/about" || location === "/work" || location === "/services" || location === "/team";

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "w-full max-w-[1400px] rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
          scrolled || isPage
            ? "bg-background/80 backdrop-blur-md border border-border/40 shadow-lg shadow-black/5" 
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <span className="font-display font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:to-primary transition-all">
            RYNC<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-4">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className={cn(
                    "text-sm font-medium transition-colors cursor-pointer px-4 py-2 rounded-full hover:bg-muted/50",
                    location === item.href ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
                  )}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="h-4 w-px bg-border mx-2" />

            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme} 
                className="rounded-full w-9 h-9 hover:bg-muted/50"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
              
              <Button asChild variant="default" className="rounded-full px-6 h-9 text-sm font-medium shadow-sm">
                <Link href="/contact">Let's Talk</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className={cn("rounded-full w-10 h-10", scrolled ? "bg-background/50" : "bg-background/20 backdrop-blur-sm")}
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full w-10 h-10 border-border/40 bg-background/50 backdrop-blur-sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-full border-none bg-background/95 backdrop-blur-2xl p-0 flex flex-col justify-center items-center">
                <nav className="flex flex-col gap-8 items-center text-center">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        <span className={cn(
                          "font-display text-5xl font-bold transition-colors cursor-pointer",
                          location === item.href ? "text-primary" : "text-foreground hover:text-primary"
                        )}>
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8"
                  >
                    <Button asChild size="lg" className="rounded-full text-lg h-14 px-10">
                      <Link href="/contact" onClick={() => setOpen(false)}>Start Project</Link>
                    </Button>
                  </motion.div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </motion.nav>
    </div>
  );
}
