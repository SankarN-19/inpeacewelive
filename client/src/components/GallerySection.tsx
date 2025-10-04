import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import galleryImage1 from "@assets/stock_images/peaceful_forest_medi_4ae0c763.jpg";
import galleryImage2 from "@assets/stock_images/light_in_darkness_co_5cdb1777.jpg";
import galleryImage3 from "@assets/generated_images/Peaceful_forest_meditation_background_1644458d.png";
import galleryImage4 from "@assets/generated_images/Light_in_darkness_concept_835da7e7.png";
import galleryImage5 from "@assets/stock_images/professional_portrai_aeae0cec.jpg";

export default function GallerySection() {
  const images = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A collection of moments and inspirations from our journey.
          </p>
        </div>

        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="bg-background/100 hover:bg-background/75"
            style={{
              position: 'absolute',
              top: '50%',
              left: '16px',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
          />
          <CarouselNext
            className="bg-background/100 hover:bg-background/75"
            style={{
              position: 'absolute',
              top: '50%',
              right: '16px',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
          />
        </Carousel>
      </div>
    </section>
  );
}