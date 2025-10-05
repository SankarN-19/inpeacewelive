import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            {t("made_with_love")}
          </div>

          <div className="space-y-2">
            <p className="font-serif text-2xl font-semibold text-foreground">
              {t("in_peace_we_live")}
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
              {t("sessions_note")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
