import { ArrowRight, Award, Users, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import heroImage from '@/assets/hero-interior.jpg';
import kitchenImage from '@/assets/kitchen-design.jpg';
import bedroomImage from '@/assets/bedroom-design.jpg';
import officeImage from '@/assets/office-design.jpg';

const services = [
  {
    title: 'Residential Design',
    description: 'Transform your home into a luxurious sanctuary with our bespoke residential interior design services.',
    image: bedroomImage,
    features: ['Custom Furniture', 'Space Planning', 'Color Consultation', 'Lighting Design'],
  },
  {
    title: 'Commercial Spaces',
    description: 'Create inspiring work environments that boost productivity and reflect your brand identity.',
    image: officeImage,
    features: ['Office Design', 'Retail Spaces', 'Hospitality', 'Corporate Branding'],
  },
  {
    title: 'Kitchen & Bath',
    description: 'Design functional and beautiful kitchens and bathrooms that combine style with practicality.',
    image: kitchenImage,
    features: ['Custom Cabinetry', 'Premium Materials', 'Smart Storage', 'Modern Fixtures'],
  },
];

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Calendar, value: '1000+', label: 'Projects Completed' },
  { icon: Star, value: '5.0', label: 'Average Rating' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-luxury-charcoal/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <ScrollAnimation animation="fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Luxury Interior
                <span className="text-primary block">Design & Build</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Transforming spaces into extraordinary experiences with AWA Design & Build. 
                Where innovation meets elegance in every detail.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-luxury-charcoal text-lg px-8 py-6">
                  View Our Work
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-luxury-charcoal mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-luxury-silver font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6">
                Our Services
              </h2>
              <p className="text-xl text-luxury-silver max-w-3xl mx-auto">
                From concept to completion, we offer comprehensive interior design and build services 
                that bring your vision to life with unparalleled craftsmanship.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="luxury-card group cursor-pointer overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-luxury-charcoal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-luxury-silver mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-luxury-silver">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together. 
              Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary text-lg px-8 py-6">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-luxury-charcoal text-lg px-8 py-6">
                Call: 017-9551698
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Index;