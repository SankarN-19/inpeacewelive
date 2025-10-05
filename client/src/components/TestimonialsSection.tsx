import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/api";

interface Testimonial {
  _id: string;
  name: string;
  comment: string;
  activityPackage: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/testimonial`);
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Voices of transformation and healing...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial._id}
              className="p-6 space-y-4 hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`card-testimonial-${testimonial._id}`}
            >
              <Quote className="w-8 h-8 text-primary/30" />
              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              <div className="pt-2 border-t border-border">
                <p className="font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.activityPackage}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}