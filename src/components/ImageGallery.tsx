import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

interface ImageGalleryProps {
  images: string[];
  title?: string;
  className?: string;
}

export const ImageGallery = ({ images, title, className = "" }: ImageGalleryProps) => {
  return (
    <section className={`py-20 relative ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-[#678E76] to-[#8BAA92] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
            >
              GALLERY
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-heading font-black bg-gradient-to-r from-[#678E76] to-[#8BAA92] bg-clip-text text-transparent mb-4">
              {title}
            </h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-2 w-24 bg-gradient-to-r from-[#678E76] to-[#C0A58B] mx-auto rounded-full"
            />
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="p-1"
                  >
                    <Card className="overflow-hidden border-2 border-[#678E76]/20 shadow-xl group">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Hover overlay with number */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 flex items-center justify-center bg-[#678E76]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center border-2 border-white/40">
                            <span className="text-3xl font-black text-white">{index + 1}</span>
                          </div>
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 hover:bg-[#678E76] hover:text-white border-[#678E76] transition-colors" />
              <CarouselNext className="static translate-y-0 hover:bg-[#678E76] hover:text-white border-[#678E76] transition-colors" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
