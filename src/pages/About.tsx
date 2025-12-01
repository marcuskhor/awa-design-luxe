import { Users, Award, Target, Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';
import heroImage from '@/assets/hero-interior.jpg';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for perfection in every project, ensuring the highest quality standards.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for design drives us to create spaces that truly inspire and delight.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to bring their unique vision to life.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We embrace new technologies and trends to deliver cutting-edge solutions.',
  },
];

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About AWA Design & Build | Interior Design Company Petaling Jaya"
        description="Learn about AWA Design & Build SDN BHD - a trusted interior design and renovation company in Petaling Jaya, Malaysia. 15+ years experience creating beautiful spaces."
        keywords="AWA design company, interior design company PJ, about AWA design and build, renovation company Petaling Jaya, interior designer Malaysia, AWA contractor history"
        canonicalUrl="https://awadesign.com.my/#/about"
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-luxury-charcoal/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <ScrollAnimation animation="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About AWA Design & Build
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Creating exceptional interior spaces with passion, expertise, and attention to detail since 2020.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div>
                <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-luxury-silver leading-relaxed">
                  <p>
                    Founded in 2020, AWA Design & Build SDN BHD has grown from a small interior design 
                    studio to one of Malaysia's most respected luxury interior design and build companies. 
                    Our journey began with a simple vision: to create beautiful, functional spaces that 
                    enhance the way people live and work.
                  </p>
                  <p>
                    Over the years, we've had the privilege of working with hundreds of clients, 
                    from private homeowners to large corporations, each with their unique needs and dreams. 
                    Our commitment to excellence, attention to detail, and passion for design has earned us 
                    a reputation for delivering exceptional results that exceed expectations.
                  </p>
                  <p>
                    Today, we continue to push boundaries, embrace new technologies, and explore innovative 
                    design solutions while staying true to our core values of quality, integrity, and 
                    client satisfaction.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="AWA Design & Build Office"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-sm">Years</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Our Values
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
                These core principles guide everything we do and shape our approach to every project.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 150}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-luxury-charcoal mb-4">
                    {value.title}
                  </h3>
                  <p className="text-luxury-silver leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-luxury-charcoal mb-6">
                Our Team
              </h2>
              <p className="text-xl text-luxury-silver max-w-2xl mx-auto">
                Meet the talented professionals who bring creativity, expertise, and passion to every project.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="bg-luxury-cream rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold text-luxury-charcoal mb-6">
                Experienced Design Professionals
              </h3>
              <p className="text-lg text-luxury-silver leading-relaxed max-w-4xl mx-auto">
                Our multidisciplinary team consists of interior designers, architects, project managers, 
                and skilled craftspeople who work together seamlessly to deliver exceptional results. 
                With diverse backgrounds and specialized expertise, we bring fresh perspectives and 
                innovative solutions to every challenge.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-4 rounded-lg text-lg font-medium">
                Contact Us Today
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default About;