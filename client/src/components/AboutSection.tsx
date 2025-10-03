import { Card } from "@/components/ui/card";
import profileImage from "@assets/stock_images/professional_portrai_aeae0cec.jpg";
import logoImage from "@assets/stock_images/light_in_darkness_co_5cdb1777.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-foreground font-medium">
                    My name is Shouq Alsulaiman
                  </span>
                  , and I'm from Kuwait.
                </p>
                <p>
                  My journey started in high school when I faced stress that
                  hurt my health. I found meditation at age 15-16 years to help
                  me relieve stress. Then I graduated to face more than just
                  stress—studying abroad, life-changing decision making,
                  channelings, pain, frustrations, loss, and disappointment.
                </p>
                <p>
                  I decided to go deep within myself, to see the unseen and
                  hidden parts of self. I chose to take healing workshops and
                  classes to help myself first, so I can now share my years of
                  lessons and experiences with you with love.
                </p>
                <p className="text-foreground font-medium">
                  I found out that we all can heal ourselves if we find a
                  healthy, supportive community and individuals where we can be
                  ourselves without fear of shame or fear.
                </p>
                <p>
                  I host spaces online to connect and remind others they are not
                  alone, and there is always a place within us that is filled
                  with peace, bliss, and love.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden hover-elevate">
              <img
                src={profileImage}
                alt="Shouq Alsulaiman"
                className="w-full h-auto object-cover"
                data-testid="img-profile"
              />
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex justify-center">
                <img
                  src={logoImage}
                  alt="In Peace We Live Logo"
                  className="w-32 h-32 rounded-lg"
                  data-testid="img-logo"
                />
              </div>
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
        </div>
      </div>
    </section>
  );
}
