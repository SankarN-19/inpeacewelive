import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for those seeking peace</span>
          </div>

          <div className="space-y-2">
            <p className="font-serif text-2xl font-light text-foreground">
              In Peace We Live
            </p>
            <p className="text-sm text-muted-foreground italic">
              سلام - Peace & Healing
            </p>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} Shouq Alsulaiman. All rights reserved.</p>
          </div>

          <div className="text-xs text-muted-foreground max-w-2xl">
            <p className="leading-relaxed">
              Sessions are offered with love and dedication. A portion of proceeds
              supports charitable causes, with receipts provided to clients.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
