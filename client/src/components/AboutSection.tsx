import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/api";
import { useTranslation } from "react-i18next";

interface AboutData {
  content: {
    en: string;
    ar: string;
  };
  profileImageUrl: string;
}

export default function AboutSection() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/about`);
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error("Failed to fetch about content:", error);
      }
    };

    fetchAboutData();
  }, []);

  const currentLanguage = i18n.language as keyof AboutData['content'];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text and Quote Card */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                {t("about_me")}
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p className="text-2xl md:text-xl">
                  {t("my_name_is")}{" "}
                  <span className="text-foreground font-medium animate-subtle-pulse">{t("shouq_alsulaiman_name")}</span>, {t("and_i_am_from")} <i>{t("kuwait")}</i>
                </p>
                {/* Split the content by newline and map to <p> tags */}
                {aboutData &&
                  aboutData.content[currentLanguage] &&
                  aboutData.content[currentLanguage]
                    .split("\n")
                    .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              </div>
            </div>

            <Card className="p-7 space-y-10 hover-elevate">
              <p className="text-sm md:text-base text-center text-muted-foreground italic leading-relaxed">
                "{t("dark_moment_quote")}"
              </p>
              <p className="text-center text-foreground font-medium">
                "{t("guide_you_quote")}"
              </p>
            </Card>
          </div>

          {/* Right Column: Profile Image Only */}
          <div className="space-y-6">
            <Card className="overflow-hidden hover-elevate">
              {aboutData?.profileImageUrl && (
                <img
                  src={aboutData.profileImageUrl}
                  alt="Shouq Alsulaiman"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}