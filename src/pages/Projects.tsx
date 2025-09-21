import { useState } from 'react';
import { Calendar, MapPin, Square } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroImage from '@/assets/hero-interior.jpg';
import kitchenImage from '@/assets/kitchen-design.jpg';
import bedroomImage from '@/assets/bedroom-design.jpg';
import officeImage from '@/assets/office-design.jpg';

const categories = ['All', 'Residential', 'Commercial', 'Kitchen & Bath'];

// Sample project data - in a real app, this would come from a database
const projects = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    category: 'Residential',
    location: 'Petaling Jaya, Selangor',
    year: '2024',
    area: '3,500 sq ft',
    image: heroImage,
    description: 'A stunning contemporary villa featuring clean lines, luxury finishes, and sophisticated color palette.',
    tags: ['Modern', 'Villa', 'Luxury'],
  },
  {
    id: 2,
    title: 'Gourmet Kitchen Renovation',
    category: 'Kitchen & Bath',
    location: 'Mont Kiara, KL',
    year: '2024',
    area: '450 sq ft',
    image: kitchenImage,
    description: 'Complete kitchen transformation with custom cabinetry, premium appliances, and marble countertops.',
    tags: ['Kitchen', 'Renovation', 'Custom'],
  },
  {
    id: 3,
    title: 'Master Bedroom Suite',
    category: 'Residential',
    location: 'Bangsar, KL',
    year: '2023',
    area: '800 sq ft',
    image: bedroomImage,
    description: 'Elegant master bedroom with walk-in closet, featuring warm textures and ambient lighting.',
    tags: ['Bedroom', 'Suite', 'Elegant'],
  },
  {
    id: 4,
    title: 'Corporate Office Design',
    category: 'Commercial',
    location: 'KLCC, KL',
    year: '2023',
    area: '12,000 sq ft',
    image: officeImage,
    description: 'Modern office space designed to enhance productivity and reflect company culture.',
    tags: ['Office', 'Corporate', 'Modern'],
  },
  {
    id: 5,
    title: 'Penthouse Living Room',
    category: 'Residential',
    location: 'Damansara Heights',
    year: '2023',
    area: '1,200 sq ft',
    image: heroImage,
    description: 'Luxurious penthouse living area with panoramic city views and premium furnishings.',
    tags: ['Penthouse', 'Living', 'Premium'],
  },
  {
    id: 6,
    title: 'Boutique Hotel Lobby',
    category: 'Commercial',
    location: 'Bukit Bintang, KL',
    year: '2023',
    area: '2,000 sq ft',
    image: officeImage,
    description: 'Sophisticated hotel lobby design that creates a memorable first impression for guests.',
    tags: ['Hotel', 'Lobby', 'Sophisticated'],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
                <Card className="luxury-card group cursor-pointer overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-primary/80 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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