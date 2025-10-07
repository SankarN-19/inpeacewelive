import { API_BASE_URL } from "@/api";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Globe, Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface JourneyMilestone {
  _id: string;
  age: string;
  title: {
    en: string;
    ar: string;
  };
  body: {
    en: string;
    ar: string;
  };
}

const icons = [
  <Heart className="w-6 h-6" />,
  <Globe className="w-6 h-6" />,
  <Lightbulb className="w-6 h-6" />,
  <Sparkles className="w-6 h-6" />,
];

const getIconForIndex = (index: number) => {
  return icons[index % icons.length];
};

export default function JourneySection() {
  const [milestones, setMilestones] = useState<JourneyMilestone[]>([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchJourneyData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/journey`);
        const data = await response.json();
        setMilestones(data);
      } catch (error) {
        console.error("Failed to fetch journey data:", error);
      }
    };

    fetchJourneyData();
  }, []);

  const currentLanguage = i18n.language as keyof JourneyMilestone['title'];

  return (
    <section id="journey" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            {t("my_journey")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("journey_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <Card
              key={milestone._id}
              className="p-8 space-y-4 hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-journey-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {getIconForIndex(index)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-primary">
                      <b>Age :</b> {milestone.age}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {milestone.title[currentLanguage]}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.body[currentLanguage]}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}