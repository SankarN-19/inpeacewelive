// client/src/components/Header.tsx
import { useState, useEffect } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const changeLanguage = () => {
    const newLang = i18n.language.startsWith("en") ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { label: t("home"), id: "hero" },
    { label: t("about"), id: "about" },
    { label: t("journey"), id: "journey" },
    { label: t("experience"), id: "experience" },
    { label: t("testimonials"), id: "testimonials" },
    { label: t("gallery"), id: "gallery" },
    { label: t("contact"), id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md p-2 -ml-2 text-left"
            data-testid="link-home"
          >
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold text-foreground">
                In Peace We Live
              </span>
              <span className="text-xs text-muted-foreground font-semibold italic">
                سلام - Peace
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                data-testid={`link-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
            <Button variant="outline" onClick={changeLanguage} className="border-2">
              {i18n.language.startsWith("en") ? "العربية" : "English"}
            </Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button variant="outline" onClick={changeLanguage} className="border-2">
              {i18n.language.startsWith("en") ? "العربية" : "English"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="justify-start"
                data-testid={`link-mobile-${item.id}`}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}