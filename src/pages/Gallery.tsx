import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import arunyaKitchen from '@/assets/arunya-kitchen.png';
import arunyaLiving from '@/assets/arunya-living.png';
import arunyaYardBlend from '@/assets/arunya-yard-blend.png';
import arunyaYardChroma from '@/assets/arunya-yard-chroma.png';
import arunyaYardPowder from '@/assets/arunya-yard-powder.png';
import pulseBed1 from '@/assets/pulse-bed-1.png';
import pulseBed2 from '@/assets/pulse-bed-2.png';
import pulseDining from '@/assets/pulse-dining.png';
import pulseLiving1 from '@/assets/pulse-living-1.png';
import pulseLiving2 from '@/assets/pulse-living-2.png';
import pulseMb from '@/assets/pulse-mb.png';
import pulseMb2 from '@/assets/pulse-mb-2.png';
import pulseYard from '@/assets/pulse-yard.png';
import pulseAltar from '@/assets/pulse-altar.png';
import dutaBedroom from '@/assets/duta-bedroom.jpg';
import dutaDining from '@/assets/duta-dining.png';
import dutaLiving from '@/assets/duta-living.png';
import nidozFoyer1 from '@/assets/nidoz-foyer-1.png';
import nidozFoyer2 from '@/assets/nidoz-foyer-2.png';
import nidozLiv1 from '@/assets/nidoz-liv-1.png';
import nidozLiv2 from '@/assets/nidoz-liv-2.png';
import nidozGaming from '@/assets/nidoz-gaming.png';
import nidozGirls from '@/assets/nidoz-girls.png';
import nidozMums from '@/assets/nidoz-mums.png';
import bangiDining1 from '@/assets/bangi-dining-1.png';
import bangiDining2 from '@/assets/bangi-dining-2.png';
import bangiKit1 from '@/assets/bangi-kit-1.png';
import bangiKit2 from '@/assets/bangi-kit-2.png';
import bangiLaundry1 from '@/assets/bangi-laundry-1.png';
import bangiLaundry2 from '@/assets/bangi-laundry-2.png';
import bangiStoreroom from '@/assets/bangi-storeroom.png';

const categories = ['All', 'Bedrooms', 'Living Rooms', 'Dining', 'Master Bedroom', 'Kitchens', 'Laundry Room', 'Altar', 'Foyer', 'Storage'];

// Gallery data
const galleryImages = [
  {
    id: 1,
    src: arunyaKitchen,
    category: 'Kitchens',
    title: 'ARUNYA RESIDENCE - Kitchen',
    description: 'Modern kitchen with premium appliances',
  },
  {
    id: 2,
    src: arunyaLiving,
    category: 'Living Rooms',
    title: 'ARUNYA RESIDENCE - Living Room',
    description: 'Contemporary living space with elegant details',
  },
  {
    id: 3,
    src: arunyaYardBlend,
    category: 'Laundry Room',
    title: 'ARUNYA RESIDENCE - Yard Blend Series',
    description: 'Functional laundry space with modern fixtures',
  },
  {
    id: 4,
    src: arunyaYardChroma,
    category: 'Laundry Room',
    title: 'ARUNYA RESIDENCE - Yard Chroma Series',
    description: 'Efficient utility area design',
  },
  {
    id: 5,
    src: arunyaYardPowder,
    category: 'Laundry Room',
    title: 'ARUNYA RESIDENCE - Yard Powder Series',
    description: 'Compact laundry solution',
  },
  {
    id: 6,
    src: pulseBed1,
    category: 'Bedrooms',
    title: 'PULSE @ PUCHONG - Bedroom 1',
    description: 'Contemporary bedroom design',
  },
  {
    id: 7,
    src: pulseBed2,
    category: 'Bedrooms',
    title: 'PULSE @ PUCHONG - Bedroom 2',
    description: 'Elegant bedroom space',
  },
  {
    id: 8,
    src: pulseDining,
    category: 'Dining',
    title: 'PULSE @ PUCHONG - Dining Area',
    description: 'Modern dining room design',
  },
  {
    id: 9,
    src: pulseLiving1,
    category: 'Living Rooms',
    title: 'PULSE @ PUCHONG - Living Room 1',
    description: 'Stylish living space',
  },
  {
    id: 10,
    src: pulseLiving2,
    category: 'Living Rooms',
    title: 'PULSE @ PUCHONG - Living Room 2',
    description: 'Contemporary living area',
  },
  {
    id: 11,
    src: pulseMb,
    category: 'Master Bedroom',
    title: 'PULSE @ PUCHONG - Master Bedroom',
    description: 'Luxurious master bedroom',
  },
  {
    id: 12,
    src: pulseMb2,
    category: 'Master Bedroom',
    title: 'PULSE @ PUCHONG - Master Bedroom 2',
    description: 'Elegant master suite',
  },
  {
    id: 13,
    src: pulseYard,
    category: 'Laundry Room',
    title: 'PULSE @ PUCHONG - Yard',
    description: 'Functional laundry space',
  },
  {
    id: 14,
    src: pulseAltar,
    category: 'Altar',
    title: 'PULSE @ PUCHONG - Altar',
    description: 'Sacred altar space',
  },
  {
    id: 15,
    src: dutaBedroom,
    category: 'Bedrooms',
    title: 'DUTA PARK - Bedroom',
    description: 'Elegant bedroom with modern furnishings',
  },
  {
    id: 16,
    src: dutaDining,
    category: 'Dining',
    title: 'DUTA PARK - Dining Area',
    description: 'Contemporary dining space',
  },
  {
    id: 17,
    src: dutaLiving,
    category: 'Living Rooms',
    title: 'DUTA PARK - Living Room',
    description: 'Modern living area with elegant design',
  },
  {
    id: 18,
    src: nidozFoyer1,
    category: 'Foyer',
    title: 'NIDOZ - Foyer 1',
    description: 'Elegant entrance with contemporary storage solutions',
  },
  {
    id: 19,
    src: nidozFoyer2,
    category: 'Foyer',
    title: 'NIDOZ - Foyer 2',
    description: 'Sophisticated foyer with modern design',
  },
  {
    id: 20,
    src: nidozLiv1,
    category: 'Living Rooms',
    title: 'NIDOZ - Living Room 1',
    description: 'Contemporary living space with seamless dining integration',
  },
  {
    id: 21,
    src: nidozLiv2,
    category: 'Living Rooms',
    title: 'NIDOZ - Living Room 2',
    description: 'Elegant living area with minimalist aesthetic',
  },
  {
    id: 22,
    src: nidozGaming,
    category: 'Bedrooms',
    title: 'NIDOZ - Gaming Room',
    description: 'Modern gaming bedroom with LED lighting',
  },
  {
    id: 23,
    src: nidozGirls,
    category: 'Bedrooms',
    title: 'NIDOZ - Girl\'s Bedroom',
    description: 'Elegant bedroom with contemporary aesthetic',
  },
  {
    id: 24,
    src: nidozMums,
    category: 'Bedrooms',
    title: 'NIDOZ - Mum\'s Bedroom',
    description: 'Sophisticated master bedroom design',
  },
  {
    id: 25,
    src: bangiDining1,
    category: 'Dining',
    title: 'BANGI LANDED - Dining 1',
    description: 'Modern dining area with elegant design',
  },
  {
    id: 26,
    src: bangiDining2,
    category: 'Dining',
    title: 'BANGI LANDED - Dining 2',
    description: 'Contemporary dining space',
  },
  {
    id: 27,
    src: bangiKit1,
    category: 'Kitchens',
    title: 'BANGI LANDED - Kitchen 1',
    description: 'Functional kitchen with modern appliances',
  },
  {
    id: 28,
    src: bangiKit2,
    category: 'Kitchens',
    title: 'BANGI LANDED - Kitchen 2',
    description: 'Elegant kitchen design',
  },
  {
    id: 29,
    src: bangiLaundry1,
    category: 'Laundry Room',
    title: 'BANGI LANDED - Laundry 1',
    description: 'Efficient laundry space',
  },
  {
    id: 30,
    src: bangiLaundry2,
    category: 'Laundry Room',
    title: 'BANGI LANDED - Laundry 2',
    description: 'Modern laundry room design',
  },
  {
    id: 31,
    src: bangiStoreroom,
    category: 'Storage',
    title: 'BANGI LANDED - Storeroom',
    description: 'Organized storage solution',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | number>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(newIndex);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-luxury-charcoal mb-6">
                Design Gallery
              </h1>
              <p className="text-xl text-luxury-silver leading-relaxed">
                Discover our extensive portfolio of interior design projects, showcasing various styles, 
                spaces, and creative solutions that inspire and delight.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'btn-primary'
                      : 'border-luxury-silver/30 text-luxury-silver hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <ScrollAnimation key={image.id} delay={index * 50}>
                <div 
                  className="group relative cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-4 text-white">
              <h3 className="text-lg font-semibold mb-1">{filteredImages[selectedImage].title}</h3>
              <p className="text-white/80">{filteredImages[selectedImage].description}</p>
              <p className="text-sm text-primary mt-2">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Our Creative Portfolio
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
                Each image represents our commitment to excellence, creativity, and attention to detail.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-luxury-silver">Photos in Portfolio</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-luxury-silver">Different Styles</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-luxury-silver">Completed Projects</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-luxury-silver">Years of Expertise</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-6">
              Inspired by What You See?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's create something beautiful together. Contact us to discuss your project and start your design journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg text-lg font-medium">
                Start Your Project
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-luxury-charcoal px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300">
                Contact Us Today
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;