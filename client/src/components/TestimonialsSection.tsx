import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  session: string;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The meditation session brought me peace I haven't felt in years. Shouq's gentle guidance helped me reconnect with my inner self.",
      author: "Sarah M.",
      session: "Stress Relief Meditation",
    },
    {
      quote:
        "Through channeling, I discovered parts of myself I didn't know existed. This journey of self-discovery has been truly transformative.",
      author: "Fatima K.",
      session: "Channeling Session",
    },
    {
      quote:
        "The energy cleansing session was exactly what I needed. I felt lighter and more aligned with my true purpose after our time together.",
      author: "Maya R.",
      session: "Energy Cleansing",
    },
    {
      quote:
        "Shouq creates a safe space where I can be vulnerable and authentic. Her compassion and wisdom have helped me navigate difficult transitions.",
      author: "Layla A.",
      session: "Life Transition Counseling",
    },
    {
      quote:
        "The heart activation meditation opened doors I didn't know were closed. I'm forever grateful for this beautiful experience.",
      author: "Noor H.",
      session: "Heart Activation",
    },
    {
      quote:
        "Working with Shouq has taught me that healing is not just possible—it's within reach when we allow ourselves to be guided with love.",
      author: "Amina S.",
      session: "Self-Love Coaching",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Voices of transformation and healing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="w-8 h-8 text-primary/30" />
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="pt-2 border-t border-border">
                <p className="font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.session}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
