import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Past Projects', href: '/projects' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Space */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                <span className="text-xs text-primary font-medium">LOGO</span>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-luxury-charcoal">
                  AWA DESIGN & BUILD
                </h1>
                <p className="text-sm text-luxury-silver">SDN BHD</p>
              </div>
            </div>

            {/* Navigation hidden - burger menu only */}

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden xl:flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-luxury-silver">
                  <Phone className="w-4 h-4" />
                  <span>017-9551698</span>
                </div>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Burger Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-20 z-40 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-background/98 backdrop-blur-md shadow-2xl max-w-md mx-auto rounded-b-3xl overflow-hidden animate-slide-in-top">
              <div className="px-6 py-8">
                {/* Navigation Items */}
                <nav className="space-y-1 mb-8">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`group flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'bg-primary/10 text-primary'
                          : 'text-luxury-charcoal hover:bg-luxury-cream hover:text-primary'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-lg font-semibold">{item.name}</span>
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        location.pathname === item.href
                          ? 'bg-primary scale-100'
                          : 'bg-transparent scale-0 group-hover:bg-primary group-hover:scale-100'
                      }`}></div>
                    </Link>
                  ))}
                </nav>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-luxury-silver/30 to-transparent mb-6"></div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-luxury-charcoal/60 uppercase tracking-wider mb-3">
                    Contact Us
                  </h3>
                  
                  <a 
                    href="tel:+60179551698"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-luxury-cream transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-luxury-silver/70">Call Us</span>
                      <span className="text-luxury-charcoal font-medium">017-9551698</span>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@awadesign.com"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-luxury-cream transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-luxury-silver/70">Email Us</span>
                      <span className="text-luxury-charcoal font-medium">info@awadesign.com</span>
                    </div>
                  </a>

                  <div className="flex items-center space-x-3 p-3 rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-luxury-silver/70">Visit Us</span>
                      <span className="text-luxury-charcoal font-medium text-sm">Petaling Jaya, Selangor</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="block w-full text-center btn-primary py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">AWA DESIGN & BUILD SDN BHD</h3>
              <p className="text-luxury-silver mb-6 leading-relaxed">
                Transforming spaces with luxury interior design and exceptional craftsmanship. 
                We create beautiful, functional environments that reflect your unique style and enhance your lifestyle.
              </p>
              <div className="flex items-center space-x-2 text-primary mb-2">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Our Location</span>
              </div>
              <p className="text-luxury-silver">
                D 3-2, Pusat Komersial Parklane,<br />
                Jalan SS 7/26, 47301 Petaling Jaya,<br />
                Selangor, Malaysia
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-luxury-silver hover:text-primary transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-white">017-9551698</p>
                    <p className="text-white">017-6388993</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-white">info@awadesign.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-luxury-silver/20 mt-12 pt-8 text-center">
            <p className="text-luxury-silver">
              © 2024 AWA Design & Build Sdn Bhd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}