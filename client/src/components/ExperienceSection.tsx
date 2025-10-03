import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

interface Certification {
  title: string;
  date: string;
  status?: string;
}

export default function ExperienceSection() {
  const certifications: Certification[] = [
    {
      title: "Internationally Certified Self-Love Master Practitioner & Coach",
      date: "Oct 2023",
    },
    {
      title: "50-Hour Meditation Teacher Training",
      date: "Nov 2023",
    },
    {
      title:
        "Internationally Certified Soul School Practitioner of Channeling & Channel Writing",
      date: "March 2024",
    },
    {
      title: "Internationally Certified Life Transition Counselor & Coach",
      date: "Nov 2023",
    },
    {
      title: "Self-Confidence & Empowerment Coach",
      date: "Oct 2023",
    },
    {
      title: "Alchemy of Meditation (Meditation Training Course)",
      date: "March 2024",
    },
    {
      title: "Ancestral Healing",
      date: "In Progress",
      status: "Diploma in Progress",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Experience & Certifications
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dedicated to continuous learning and professional growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 md:p-12 space-y-6 hover-elevate" data-testid="card-degree">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-3">
                  Master's in Social Entrepreneurship
                </h3>
                <p className="text-primary font-medium mb-4">
                  University of Southern California
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Worked with homeless individuals in Los Angeles for several
                  months to help them find solutions for their different
                  situations, wants, and needs. This experience made me realize
                  how faith can be found in our darkest moments.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 space-y-3 hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-certification-${index}`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {cert.status ? (
                      <BookOpen className="w-5 h-5" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-medium text-foreground mb-2 leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-primary font-medium">
                      {cert.date}
                    </p>
                    {cert.status && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.status}
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
