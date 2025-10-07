import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Heart } from "lucide-react";
import { API_BASE_URL } from "@/api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ContactInfo {
  email: string;
  instagramHandle: string;
}

export default function ContactSection() {
  const { t } = useTranslation();
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/contact`);
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            {t("lets_connect")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("connect_subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <Card className="p-8 md:p-12 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 hover-elevate rounded-lg p-4 -m-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Email
                  </h3>
                  <a
                    href={`mailto:${contactInfo?.email}`}
                    className="text-primary hover:underline break-all"
                    data-testid="link-email"
                  >
                    {contactInfo?.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 hover-elevate rounded-lg p-4 -m-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    Instagram
                  </h3>
                  <a
                    href={`https://instagram.com/${contactInfo?.instagramHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                    data-testid="link-instagram"
                  >
                    @{contactInfo?.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Heart className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" />
                <p className="leading-relaxed">
                  {t("donation_note")}
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                onClick={() => window.location.href = `mailto:${contactInfo?.email}`}
                data-testid="button-contact"
              >
                {t("send_message")}
              </Button>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground italic">
              {t("peace_quote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
