import { Card } from "@/components/ui/card";
import profileImage from "@assets/stock_images/shouq1.png";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/api";

export default function AboutSection() {
  const [aboutContent, setAboutContent] = useState("");
  const nameText = "Shouq Alsulaiman";

  useEffect(() => {
    const fetchAboutContent = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/about`);
        const data = await response.json();
        setAboutContent(data.content);
      } catch (error) {
        console.error("Failed to fetch about content:", error);
      }
    };

    fetchAboutContent();
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text and Quote Card */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p className="text-2xl md:text-xl">
                My name is{" "}
                <span className="text-foreground font-medium animate-subtle-pulse">{nameText}</span>, and I'm from <i>Kuwait.</i>
                </p>
                {/* Split the content by newline and map to <p> tags */}
                {aboutContent.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            {/* ... rest of your component */}
            <Card className="p-7 space-y-10 hover-elevate">
              <p className="text-sm md:text-base text-center text-muted-foreground italic leading-relaxed">
                "In every dark moment there is light if you allow the darkness
                to show you, and if you allow your old skin that doesn't serve
                you to fall, you will feel alive again."
              </p>
              <p className="text-center text-foreground font-medium">
                If you are ready, I am here to guide you in this journey.
              </p>
            </Card>
          </div>

          {/* Right Column: Profile Image Only */}
          <div className="space-y-6">
            <Card className="overflow-hidden hover-elevate">
              <img
                src={profileImage}
                alt="Shouq Alsulaiman"
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}