
import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Header = () => {
  const scrollDirection = useScrollDirection();
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300 ease-in-out ${
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">Spear AI</div>
          
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
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm font-medium">
              Log in
            </Button>
            <Button className="gradient-blue hover:opacity-90 transition-opacity text-sm font-medium">
              Sign up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
