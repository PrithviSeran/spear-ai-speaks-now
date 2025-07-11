
import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const scrollDirection = useScrollDirection();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation values for Framer Motion (for the inner pill wrapper)
  const pillVariants = {
    atTop: {
      borderRadius: "0px",
      background: "rgba(0,0,0,0)",
      boxShadow: "0 0 #0000",
      paddingLeft: "0px",
      paddingRight: "0px",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
    scrolled: {
      borderRadius: "9999px",
      background: "rgba(0,0,0,0.95)", // solid black
      boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
    hidden: {
      borderRadius: "9999px",
      background: "rgba(0,0,0,0.95)", // solid black
      boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      y: 'calc(-100% - 1rem - 16px)',
    },
  };

  // Determine which variant to use
  let animateVariant = isAtTop ? "atTop" : (scrollDirection === 'down' ? "hidden" : "scrolled");

  return (
    <header
      className="fixed left-0 right-0 top-4 z-50 w-full mx-auto flex justify-center pointer-events-none"
    >
      <motion.div
        initial={false}
        animate={animateVariant}
        variants={pillVariants}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="w-full max-w-5xl pointer-events-auto"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Spear AI Logo" className="h-10 w-auto" />
            <span className="text-2xl font-bold text-blue-500">Blade AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              How it works
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#enterprise" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Enterprise
            </a>
            <a href="#help" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Help
            </a>
          </div>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
