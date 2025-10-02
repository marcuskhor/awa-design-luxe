import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import officeImage from '@/assets/office-design.jpg';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['017-9551698', '017-6388993'],
    description: 'Call us during business hours',
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: ['info@awadesign.com'],
    description: 'Send us your inquiries anytime',
  },
  {
    icon: MapPin,
    title: 'Our Location',
    details: [
      'D 3-2, Pusat Komersial Parklane',
      'Jalan SS 7/26, 47301 Petaling Jaya',
      'Selangor, Malaysia'
    ],
    description: 'Visit our showroom and office',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 9:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 5:00 PM',
      'Sunday: By Appointment Only'
    ],
    description: 'When you can reach us',
  },
];

const services = [
  'Residential Interior Design',
  'Commercial Space Design',
  'Kitchen & Bathroom Renovation',
  'Custom Furniture Design',
  'Lighting Design',
  'Color Consultation',
  'Space Planning',
  'Project Management',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your backend or email service
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-luxury-charcoal mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-luxury-silver leading-relaxed">
                Ready to transform your space? Get in touch with our team of experts to discuss your 
                interior design project and discover how we can bring your vision to life.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollAnimation>
              <div>
                <h2 className="text-3xl font-bold text-luxury-charcoal mb-6">
                  Get a Free Consultation
                </h2>
                <p className="text-luxury-silver mb-8 leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours to schedule 
                  your complimentary design consultation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-luxury-charcoal font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-luxury-charcoal font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-luxury-charcoal font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-luxury-charcoal font-medium">
                        Service Needed
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-luxury-charcoal font-medium">
                      Project Budget Range
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under RM 50,000">Under RM 50,000</option>
                      <option value="RM 50,000 - RM 100,000">RM 50,000 - RM 100,000</option>
                      <option value="RM 100,000 - RM 200,000">RM 100,000 - RM 200,000</option>
                      <option value="RM 200,000 - RM 500,000">RM 200,000 - RM 500,000</option>
                      <option value="Above RM 500,000">Above RM 500,000</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-luxury-charcoal font-medium">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us about your project, space requirements, style preferences, and timeline..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-primary w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Information */}
            <ScrollAnimation delay={200}>
              <div>
                <h2 className="text-3xl font-bold text-luxury-charcoal mb-6">
                  Contact Information
                </h2>
                <p className="text-luxury-silver mb-8 leading-relaxed">
                  We're here to help bring your design dreams to life. Reach out through any of 
                  the following channels, and our team will be happy to assist you.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="luxury-card">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-luxury-charcoal mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1 mb-2">
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-luxury-silver">
                                  {detail}
                                </p>
                              ))}
                            </div>
                            <p className="text-sm text-luxury-silver/80">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Contact Buttons */}
                <div className="mt-8 space-y-4">
                  <Button
                    size="lg"
                    className="w-full btn-primary"
                    onClick={() => window.open('tel:+60179551698')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 017-9551698
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open('https://wa.me/60179551698')}
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Office Image */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Visit Our Showroom
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
                Experience our design expertise firsthand at our beautifully designed showroom 
                in Petaling Jaya, featuring the latest trends and materials.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="relative">
              <img
                src={officeImage}
                alt="AWA Design & Build Showroom"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Design Showroom</h3>
                <p className="text-white/90">
                  Schedule a visit to see our latest furniture collections, material samples, and design inspirations.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Google Map Location */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Find Us Here
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto mb-4">
                Visit us at our office in Petaling Jaya, Selangor. We're easily accessible and ready to welcome you.
              </p>
              <div className="flex items-center justify-center text-luxury-silver mb-2">
                <MapPin className="w-5 h-5 text-primary mr-2" />
                <p className="font-medium">
                  D 3-2, Pusat Komersial Parklane, Jalan SS 7/26, 47301 Petaling Jaya, Selangor
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9347773775596!2d101.59498731533!3d3.0666667974789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0xcd3740df5a3bf999!2sAWA+DESIGN+AND+BUILD+SDN+BHD!5e0!3m2!1sen!2smy!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AWA Design & Build Location"
                className="w-full"
              ></iframe>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="mt-8 text-center">
              <a
                href="https://www.google.com/maps/place/AWA+DESIGN+AND+BUILD+SDN+BHD/data=!4m2!3m1!1s0x0:0xcd3740df5a3bf999?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center btn-primary px-8 py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
                Quick answers to common questions about our interior design services and process.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation delay={100}>
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-luxury-charcoal mb-3">
                    How long does a typical project take?
                  </h3>
                  <p className="text-luxury-silver">
                    Project timelines vary based on scope and complexity. Residential projects typically 
                    take 8-12 weeks, while commercial projects may take 12-20 weeks from design to completion.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-luxury-charcoal mb-3">
                    Do you provide 3D visualizations?
                  </h3>
                  <p className="text-luxury-silver">
                    Yes! We create detailed 3D renderings and virtual walkthroughs so you can visualize 
                    your space before construction begins, ensuring you're completely satisfied with the design.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-luxury-charcoal mb-3">
                    What's included in your design services?
                  </h3>
                  <p className="text-luxury-silver">
                    Our comprehensive services include space planning, furniture selection, custom cabinetry, 
                    lighting design, color consultation, project management, and full installation services.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <Card className="luxury-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-luxury-charcoal mb-3">
                    Do you work within specific budgets?
                  </h3>
                  <p className="text-luxury-silver">
                    Absolutely! We work with various budget ranges and will tailor our design solutions 
                    to meet your needs while maximizing value and achieving your desired aesthetic.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;