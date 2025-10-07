import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/stock_images/fig1shouq.png";
import { useTranslation } from "react-i18next";
import { API_BASE_URL } from "@/api";
import { useEffect, useState } from "react";

interface HeroData {
  title: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  backgroundImageUrl: string;
}

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  const [heroData, setHeroData] = useState<HeroData | null>(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/hero`);
        const data = await response.json();
        setHeroData(data);
      } catch (error) {
        console.error("Failed to fetch hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentLanguage = i18n.language as keyof HeroData['title'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: heroData?.backgroundImageUrl
            ? `url(${heroData.backgroundImageUrl})`
            : "none",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background/40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-6xl md:text-8xl font-light text-primary-foreground mb-6 tracking-wide">
            {heroData ? heroData.title[currentLanguage] : t("salam")}
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
            {heroData ? heroData.subtitle[currentLanguage] : t("salam_greeting")}
          </p>
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm"
            data-testid="button-begin-journey"
          >
            {t("begin_journey")}
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown size={50} />
      </button>
    </section>
  );
}