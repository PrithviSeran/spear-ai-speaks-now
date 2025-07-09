
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold gradient-text mb-4 md:mb-0">Spear AI</div>
          <div className="text-muted-foreground text-sm">
            © 2024 Spear AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
