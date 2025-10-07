import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/api";
import { useTranslation } from "react-i18next";


interface GalleryImage {
  _id: string;
  imageUrl: string;
  caption: string;
}

export default function GallerySection() {
  const { t, i18n } = useTranslation();
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/gallery`);
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };

    fetchImages();
  }, []);


  return (
    <section id="gallery" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
            {t("gallery_title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("gallery_subtitle")}
          </p>
        </div>

        <Carousel
        key={i18n.language}
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
            direction: i18n.dir(),
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image._id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      <img
                        src={image.imageUrl}
                        alt={image.caption}
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