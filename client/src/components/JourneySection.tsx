import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Globe, Lightbulb } from "lucide-react";

interface JourneyMilestone {
  age: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function JourneySection() {
  const milestones: JourneyMilestone[] = [
    {
      age: "15-16",
      icon: <Heart className="w-6 h-6" />,
      title: "Discovery of Meditation",
      description:
        "Faced stress in high school that hurt my health. Found meditation to help relieve stress and begin inner healing.",
    },
    {
      age: "20s",
      icon: <Globe className="w-6 h-6" />,
      title: "Studying Abroad",
      description:
        "Graduated to face more challenges—life-changing decisions, channeling, pain, frustrations, loss, and disappointment.",
    },
    {
      age: "Mid 20s",
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Going Deep Within",
      description:
        "Decided to see the unseen and hidden parts of self. Explored the depths of inner consciousness and transformation.",
    },
    {
      age: "Present",
      icon: <Sparkles className="w-6 h-6" />,
      title: "Sharing with Love",
      description:
        "Took healing workshops and classes to help myself first. Now sharing years of lessons and experiences with others.",
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            My Journey
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A path of self-discovery, healing, and transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <Card
              key={index}
              className="p-8 space-y-4 hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-journey-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {milestone.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-primary">
                      Age {milestone.age}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
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
