import { useState } from 'react';
import { Calendar, MapPin, Square, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
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

const categories = ['All', 'Residential'];

// Sample project data - in a real app, this would come from a database
const projects = [
  {
    id: 1,
    title: 'ARUNYA RESIDENCE',
    category: 'Residential',
    location: 'Singapore',
    year: '2025',
    area: '1,800 sq ft',
    image: arunyaKitchen,
    description: 'Contemporary residential design featuring modern kitchen, elegant living spaces, and functional utility areas with premium finishes.',
    tags: ['Modern', 'Contemporary', 'Premium'],
    gallery: [
      arunyaKitchen,
      arunyaLiving,
      arunyaYardBlend,
      arunyaYardChroma,
      arunyaYardPowder,
    ],
  },
  {
    id: 2,
    title: 'PULSE @ PUCHONG',
    category: 'Residential',
    location: 'Puchong, Selangor',
    year: '2025',
    area: '1,500 sq ft',
    image: pulseLiving1,
    description: 'Complete residential interior design featuring elegant bedrooms, contemporary living spaces, stylish dining area, luxurious master bedroom, functional laundry room, and sacred altar space.',
    tags: ['Modern', 'Contemporary', 'Residential'],
    gallery: [
      pulseBed1,
      pulseBed2,
      pulseDining,
      pulseLiving1,
      pulseLiving2,
      pulseMb,
      pulseMb2,
      pulseYard,
      pulseAltar,
    ],
  },
  {
    id: 3,
    title: 'DUTA PARK',
    category: 'Residential',
    location: 'Kuala Lumpur',
    year: '2024',
    area: '1,400 sq ft',
    image: dutaLiving,
    description: 'Modern residential interior featuring sophisticated bedroom design, elegant dining area, and contemporary living space with premium finishes.',
    tags: ['Modern', 'Elegant', 'Contemporary'],
    gallery: [
      dutaBedroom,
      dutaDining,
      dutaLiving,
    ],
  },
  {
    id: 4,
    title: 'NIDOZ',
    category: 'Residential',
    location: 'Malaysia',
    year: '2024',
    area: '1,600 sq ft',
    image: nidozLiv1,
    description: 'Complete residential interior featuring elegant foyer entrance, contemporary living space, and sophisticated bedroom designs including gaming room and personal sanctuaries.',
    tags: ['Modern', 'Contemporary', 'Elegant'],
    gallery: [
      nidozFoyer1,
      nidozFoyer2,
      nidozLiv1,
      nidozLiv2,
      nidozGaming,
      nidozGirls,
      nidozMums,
    ],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectGallery = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedProject === null) return;
    const project = projects.find(p => p.id === selectedProject);
    if (!project) return;

    if (direction === 'prev') {
      setCurrentImageIndex(prev => 
        prev > 0 ? prev - 1 : project.gallery.length - 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev < project.gallery.length - 1 ? prev + 1 : 0
      );
    }
  };

  const currentProject = selectedProject !== null 
    ? projects.find(p => p.id === selectedProject) 
    : null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-luxury-charcoal mb-6">
                Past Projects
              </h1>
              <p className="text-xl text-luxury-silver leading-relaxed">
                Explore our portfolio of completed projects, showcasing our expertise in creating 
                beautiful, functional spaces that exceed our clients' expectations.
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

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={index * 100}>
                <Card 
                  className="luxury-card group cursor-pointer overflow-hidden"
                  onClick={() => openProjectGallery(project.id)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <ImageIcon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-primary/80 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-white/90 flex items-center gap-1">
                        <ImageIcon className="w-4 h-4" />
                        {project.gallery.length} photos
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary font-medium">{project.category}</span>
                      <span className="text-sm text-luxury-silver">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-luxury-charcoal mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-luxury-silver mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2 text-sm text-luxury-silver">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-2 text-primary" />
                        {project.area}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Project Highlights
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
                Every project tells a story of collaboration, creativity, and exceptional craftsmanship.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">1000+</div>
                <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Projects Completed</h3>
                <p className="text-luxury-silver">Successfully delivered across Malaysia</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">500+</div>
                <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Happy Clients</h3>
                <p className="text-luxury-silver">Satisfied customers who trust our expertise</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">15+</div>
                <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">Years Experience</h3>
                <p className="text-luxury-silver">Delivering exceptional interior design solutions</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Project Gallery Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={closeGallery}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-background border-0">
          {currentProject && (
            <div className="relative w-full h-full flex flex-col">
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
                <div className="flex items-start justify-between">
                  <div className="text-white">
                    <h2 className="text-2xl font-bold mb-2">{currentProject.title}</h2>
                    <p className="text-white/80 text-sm">
                      {currentImageIndex + 1} / {currentProject.gallery.length}
                    </p>
                  </div>
                  <button
                    onClick={closeGallery}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center bg-black/95 p-4">
                <img
                  src={currentProject.gallery[currentImageIndex]}
                  alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Navigation Buttons */}
              {currentProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Thumbnail Strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                  {currentProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                        idx === currentImageIndex 
                          ? 'ring-2 ring-primary scale-105' 
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact CTA */}
      <section className="py-24 bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can bring your vision to life with our expertise.
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

export default Projects;