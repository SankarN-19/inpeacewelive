import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Peaceful_forest_meditation_background_1644458d.png";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/95" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-6xl md:text-8xl font-light text-primary-foreground mb-6 tracking-wide">
            سلام
          </h1>
          <p className="font-serif text-3xl md:text-4xl font-light text-primary-foreground/90 mb-4">
            Salam
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
            If you love adventure, animals, nature, mystery, hope, faith... then
            you are in the right place
          </p>
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm"
            data-testid="button-begin-journey"
          >
            Begin Your Journey
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
