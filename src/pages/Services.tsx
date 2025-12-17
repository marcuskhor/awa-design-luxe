import { Link } from 'react-router-dom';
import { Home, Building, Utensils, Palette, Lightbulb, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';
import kitchenImage from '@/assets/kitchen-design.jpg';
import bedroomImage from '@/assets/bedroom-design.jpg';
import officeImage from '@/assets/office-design.jpg';
import servicesHero from '@/assets/services-hero.jpg';
import processProposal from '@/assets/process-proposal.jpg';
import processMeasurement from '@/assets/process-measurement.jpg';
import processSchematic from '@/assets/process-schematic.jpg';
import processAmendment from '@/assets/process-amendment.jpg';
import processDrawing from '@/assets/process-drawing.jpg';
import processConfirmation from '@/assets/process-confirmation.jpg';
import processConstruction from '@/assets/process-construction.jpg';
import processFinishing from '@/assets/process-finishing.jpg';
import processHandover from '@/assets/process-handover.jpg';

const services = [
  {
    icon: Home,
    title: 'Residential Interior Design & Renovation',
    description: 'Creating personalized, comfortable homes tailored to lifestyle needs with comprehensive design and renovation services.',
    image: bedroomImage,
    features: [
      'Living Room & Bedroom Design',
      'Kitchen & Bathroom Planning',
      'Custom Furniture Selection',
      'Color & Material Consultation',
      'Space Planning & Layout Optimization',
      'Lighting Design & Installation',
      'Complete Home Renovation',
      'Personalized Style Development',
    ],
    process: [
      'Home Assessment & Lifestyle Analysis',
      'Personalized Design Concept Development',
      '3D Visualization & Material Selection',
      'Project Management & Quality Installation',
    ],
  },
  {
    icon: Building,
    title: 'Commercial & Office Spaces',
    description: 'Designing and building retail, F&B, and corporate environments that enhance brand presence and functionality.',
    image: officeImage,
    features: [
      'Office Space Planning & Design',
      'Retail Store Layout & Branding',
      'Restaurant & F&B Design',
      'Corporate Identity Integration',
      'Ergonomic Workspace Solutions',
      'Sustainable Design Practices',
      'Brand-Focused Environments',
      'Functional Space Optimization',
    ],
    process: [
      'Brand Analysis & Business Requirements',
      'Strategic Space Planning & Design',
      'Implementation & Project Coordination',
      'Final Installation & Quality Control',
    ],
  },
  {
    icon: Utensils,
    title: 'Renovation & Remodeling',
    description: 'Transforming outdated properties into modern, efficient, and stylish spaces with comprehensive renovation solutions.',
    image: kitchenImage,
    features: [
      'Complete Property Renovation',
      'Kitchen & Bathroom Remodeling',
      'Structural Modifications',
      'Modern Systems Integration',
      'Energy Efficiency Upgrades',
      'Smart Home Technology',
      'Luxury Material Upgrades',
      'Space Reconfiguration',
    ],
    process: [
      'Property Assessment & Structural Analysis',
      'Renovation Planning & Design Development',
      'Construction Management & Coordination',
      'Final Inspection & Handover',
    ],
  },
];

const additionalServices = [
  {
    icon: Palette,
    title: 'Customized Design Solutions',
    description: 'Offering tailor-made concepts based on each client\'s vision, style, and budget with personalized attention.',
  },
  {
    icon: Lightbulb,
    title: 'Integrated Design & Build',
    description: 'Our unique approach combines creative design with professional construction for seamless project delivery.',
  },
  {
    icon: Hammer,
    title: 'Quality & Project Management',
    description: 'Strict attention to quality control, cost management, and on-time delivery for complete peace of mind.',
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO 
        title="Interior Design & Renovation Services | AWA Design Petaling Jaya"
        description="Professional interior design services in Petaling Jaya - residential design, commercial spaces, kitchen & bathroom renovation. AWA Design & Build offers complete design and build solutions."
        keywords="interior design services PJ, renovation services Petaling Jaya, kitchen renovation PJ, bathroom renovation Petaling Jaya, residential interior design, commercial interior design Malaysia, AWA design services, home renovation Selangor"
        canonicalUrl="https://awadesign.com.my/#/services"
      />
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHero})` }}
        >
          <div className="absolute inset-0 bg-luxury-charcoal/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                From concept to completion, we offer comprehensive interior design and build services 
                that transform your vision into reality with exceptional craftsmanship and attention to detail.
              </p>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 text-left shadow-2xl">
                <h3 className="text-2xl font-bold text-luxury-charcoal mb-4">What Sets AWA Apart</h3>
                <p className="text-luxury-silver leading-relaxed mb-4">
                  Our integrated approach combines both creative design and professional construction. Unlike firms that focus only on design or only on renovation, we bring both disciplines together, ensuring that ideas are transformed into reality seamlessly.
                </p>
                <p className="text-luxury-silver leading-relaxed">
                  With strict attention to quality control, cost management, and on-time delivery, we provide our clients with confidence and peace of mind throughout every project. We remain committed to our philosophy of <span className="text-primary font-semibold">Art • Workmanship • Architecture</span>.
                </p>
              </div>
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
      <section className="py-24 bg-background">
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

      {/* Service Procedure */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Our Design & Build Process
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
                We follow a proven, step-by-step methodology to ensure every project is completed 
                to the highest standards, on time and within budget.
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: 1,
                  title: 'Proposal',
                  description: 'Prepare concept mood board and estimate construction and architecture costing',
                  image: processProposal,
                },
                {
                  step: 2,
                  title: 'Site Measurement',
                  description: 'Accurate measurement of your space to ensure precise planning and execution',
                  image: processMeasurement,
                },
                {
                  step: 3,
                  title: 'Schematic Design',
                  description: '2D floor plan, furniture layout plan and detailed 3D perspective visualization',
                  image: processSchematic,
                },
                {
                  step: 4,
                  title: '3D Amendment & Detailing',
                  description: 'Refine 3D designs and discuss all details until you\'re completely satisfied',
                  image: processAmendment,
                },
                {
                  step: 5,
                  title: 'Construction Drawing',
                  description: 'Designer creates comprehensive construction drawings and reviews with owner',
                  image: processDrawing,
                },
                {
                  step: 6,
                  title: 'Confirmation & Deposit',
                  description: 'Owner initials all construction drawings for final approval and makes deposit for construction',
                  image: processConfirmation,
                },
                {
                  step: 7,
                  title: 'Construction Phase',
                  description: 'Construction begins with designer conducting regular site checking and quality control',
                  image: processConstruction,
                },
                {
                  step: 8,
                  title: 'Final Touches',
                  description: 'Carpentry design proposal, lighting fitting selection, curtain & blind installation, and decorative items placement',
                  image: processFinishing,
                },
                {
                  step: 9,
                  title: 'Handover',
                  description: 'Final inspection and handover to owner with complete documentation and warranty',
                  image: processHandover,
                },
              ].map((item, index) => (
                <ScrollAnimation key={index} delay={index * 100}>
                  <Card className="luxury-card hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">{item.step}</span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-luxury-charcoal mb-2">
                        {item.title}
                      </h3>
                      <p className="text-luxury-silver leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              ))}
            </div>
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
              <Link to="/contact" className="btn-primary px-8 py-4 rounded-lg text-lg font-medium">
                Get Free Consultation
              </Link>
              <Link to="/projects" className="border border-white text-white hover:bg-white hover:text-luxury-charcoal px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300">
                View Our Work
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Services;