import { Home, Building, Utensils, Palette, Lightbulb, Hammer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import kitchenImage from '@/assets/kitchen-design.jpg';
import bedroomImage from '@/assets/bedroom-design.jpg';
import officeImage from '@/assets/office-design.jpg';

const services = [
  {
    icon: Home,
    title: 'Residential Interior Design',
    description: 'Transform your home into a luxurious sanctuary with our comprehensive residential design services.',
    image: bedroomImage,
    features: [
      'Living Room & Bedroom Design',
      'Kitchen & Bathroom Planning',
      'Custom Furniture Selection',
      'Color & Material Consultation',
      'Space Planning & Layout',
      'Lighting Design',
    ],
    process: [
      'Initial Consultation & Needs Assessment',
      'Concept Development & Design Proposal',
      '3D Visualization & Material Selection',
      'Project Management & Installation',
    ],
  },
  {
    icon: Building,
    title: 'Commercial Interior Design',
    description: 'Create inspiring work environments that reflect your brand and boost productivity.',
    image: officeImage,
    features: [
      'Office Space Planning',
      'Retail Store Design',
      'Restaurant & Hospitality',
      'Corporate Branding Integration',
      'Ergonomic Workspace Solutions',
      'Sustainable Design Practices',
    ],
    process: [
      'Brand Analysis & Space Assessment',
      'Strategic Design Planning',
      'Implementation & Project Coordination',
      'Final Installation & Quality Control',
    ],
  },
  {
    icon: Utensils,
    title: 'Kitchen & Bathroom Renovation',
    description: 'Design functional and beautiful kitchens and bathrooms that combine style with practicality.',
    image: kitchenImage,
    features: [
      'Custom Cabinetry Design',
      'Premium Material Selection',
      'Modern Appliance Integration',
      'Smart Storage Solutions',
      'Plumbing & Electrical Planning',
      'Luxury Fixture Installation',
    ],
    process: [
      'Space Analysis & Functional Planning',
      'Design Development & Material Selection',
      'Construction Management',
      'Final Installation & Testing',
    ],
  },
];

const additionalServices = [
  {
    icon: Palette,
    title: 'Color Consultation',
    description: 'Expert color advice to create the perfect atmosphere for your space.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Comprehensive lighting solutions to enhance ambiance and functionality.',
  },
  {
    icon: Hammer,
    title: 'Custom Furniture',
    description: 'Bespoke furniture pieces designed and crafted specifically for your space.',
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-luxury-charcoal mb-6">
                Our Services
              </h1>
              <p className="text-xl text-luxury-silver leading-relaxed">
                From concept to completion, we offer comprehensive interior design and build services 
                that transform your vision into reality with exceptional craftsmanship and attention to detail.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div key={index} className={`mb-24 ${index !== services.length - 1 ? 'border-b border-border pb-24' : ''}`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <ScrollAnimation delay={index * 100}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-luxury-charcoal">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-luxury-silver mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">What's Included:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            <span className="text-luxury-silver">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-luxury-charcoal mb-4">Our Process:</h3>
                      <div className="space-y-2">
                        {service.process.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center">
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-xs text-primary font-medium">{stepIndex + 1}</span>
                            </div>
                            <span className="text-luxury-silver">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={index * 100 + 200}>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Additional Specialized Services
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
                Complement your main project with our specialized services designed to perfect every detail.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <Card className="luxury-card text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-luxury-charcoal mb-4">
                      {service.title}
                    </h3>
                    <p className="text-luxury-silver leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your interior design needs and get a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg text-lg font-medium">
                Get Free Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-luxury-charcoal px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300">
                View Our Work
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Services;