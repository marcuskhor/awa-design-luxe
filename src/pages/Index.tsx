import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Calendar, Star, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';
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

const portfolioItems = [
  {
    title: 'Modern Luxury Villa',
    category: 'Residential',
    image: bedroomImage,
    description: 'Complete interior transformation with contemporary design elements and premium finishes.',
  },
  {
    title: 'Corporate Office Space',
    category: 'Commercial',
    image: officeImage,
    description: 'Sophisticated workspace design that enhances productivity and brand presence.',
  },
  {
    title: 'Gourmet Kitchen Design',
    category: 'Kitchen & Bath',
    image: kitchenImage,
    description: 'State-of-the-art kitchen with custom cabinetry and premium appliances.',
  },
];

const designProcess = [
  {
    step: '01',
    title: 'Consultation & Planning',
    description: 'We start with understanding your vision, needs, and budget to create a tailored design approach.',
  },
  {
    step: '02',
    title: 'Design Development',
    description: 'Our team creates detailed 3D visualizations and technical drawings for your approval.',
  },
  {
    step: '03',
    title: 'Material Selection',
    description: 'Carefully curated materials and finishes that match your style and quality expectations.',
  },
  {
    step: '04',
    title: 'Construction & Installation',
    description: 'Professional execution with strict quality control and timely project completion.',
  },
];

const certificates = [
  'CIDB Certified Contractor',
  'Green Building Index (GBI) Professional',
  'ISO 9001:2015 Quality Management',
  'Malaysian Institute of Interior Designers (MIID)',
  'SSM Registered Company',
  'PKK Licensed Contractor',
];

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="AWA Design & Build | Interior Design & Renovation Contractor Petaling Jaya"
        description="AWA Design & Build SDN BHD - Your trusted interior design & renovation contractor in Petaling Jaya (PJ), Malaysia. 15+ years experience, 500+ happy clients. Kitchen, bathroom, residential & commercial renovation."
        keywords="AWA, AWA design, AWA design and build, AWA renovation, AWA contractor, Petaling Jaya renovation, PJ renovation, interior design Malaysia, interior design Petaling Jaya, renovation contractor PJ, home renovation PJ, kitchen renovation Petaling Jaya"
        canonicalUrl="https://awadesign.com.my/"
      />
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
                <Link to="/contact" className="btn-primary text-lg px-8 py-4 rounded-lg font-medium inline-flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/projects" className="border border-white text-white hover:bg-white hover:text-luxury-charcoal px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300">
                  View Our Work
                </Link>
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

      {/* Featured Portfolio Section */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6">
                Featured Portfolio
              </h2>
              <p className="text-xl text-luxury-silver max-w-3xl mx-auto">
                Explore our latest projects showcasing innovative design solutions and exceptional craftsmanship 
                across residential, commercial, and specialized spaces.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 200}>
                <Card className="luxury-card group cursor-pointer overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-luxury-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-luxury-charcoal mb-3">
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

          <ScrollAnimation delay={600}>
            <div className="text-center mt-12">
              <Button size="lg" className="btn-primary">
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6">
                Our Design Process
              </h2>
              <p className="text-xl text-luxury-silver max-w-3xl mx-auto">
                From initial concept to final installation, our systematic approach ensures exceptional 
                results that exceed expectations at every stage.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-primary">{process.step}</span>
                    </div>
                    {index < designProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-luxury-charcoal mb-4">
                    {process.title}
                  </h3>
                  <p className="text-luxury-silver leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-24 bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Certifications & Credentials
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our professional certifications and industry recognition demonstrate our commitment 
                to excellence and adherence to the highest standards in design and construction.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-lg font-medium">{cert}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollAnimation>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-luxury-charcoal mb-6">
                  Start Your Project Today
                </h2>
                <p className="text-xl text-luxury-silver mb-8 leading-relaxed">
                  Ready to transform your space? Get in touch with our design experts for a 
                  personalized consultation and discover how we can bring your vision to life.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-luxury-charcoal">Call Us</p>
                      <p className="text-luxury-silver">017-9551698 / 017-6388993</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-luxury-charcoal">Email Us</p>
                      <p className="text-luxury-silver">hello@awadesign.my</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-luxury-charcoal">Visit Us</p>
                      <p className="text-luxury-silver">
                        D 3-2, Pusat Komersial Parklane,<br />
                        Jalan SS 7/26, 47301 Petaling Jaya,<br />
                        Selangor, Malaysia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="luxury-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-luxury-charcoal mb-6">
                    Get Free Consultation
                  </h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          First Name
                        </label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                          Last Name
                        </label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                        Email Address
                      </label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                        Phone Number
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                        <option>Select project type</option>
                        <option>Residential Design</option>
                        <option>Commercial Space</option>
                        <option>Kitchen & Bath</option>
                        <option>Renovation</option>
                        <option>Custom Design</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-luxury-charcoal mb-2">
                        Project Details
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project requirements, timeline, and budget range..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary text-lg py-6">
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
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
              <Link to="/contact" className="btn-primary text-lg px-8 py-4 rounded-lg font-medium inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+60179551698" className="border border-white text-white hover:bg-white hover:text-luxury-charcoal px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300">
                Call: 017-9551698
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Index;