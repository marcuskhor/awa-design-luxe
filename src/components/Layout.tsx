import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/AWA_logo.png';

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
      {/* Burger Button - Always Visible, Independent of Navbar */}
      {!isMenuOpen && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
          className="fixed top-5 right-4 bg-primary hover:bg-primary-dark shadow-lg z-[100] w-12 h-12"
        >
          <Menu className="w-6 h-6 text-white" />
        </Button>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 py-3">
            {/* Logo Space */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <img 
                src={logoImage} 
                alt="AWA Design & Build Logo" 
                className="h-[11rem] w-auto flex-shrink-0"
              />
              <div className="hidden md:block flex-shrink-0">
                <h1 className="text-xl font-bold text-luxury-charcoal whitespace-nowrap">
                  AWA DESIGN & BUILD SDN BHD
                </h1>
              </div>
            </div>

            {/* Spacer for burger button */}
            <div className="w-12 h-12"></div>
          </div>
        </div>
      </nav>

      {/* Burger Menu - Right Sidebar */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-background shadow-2xl animate-slide-in-right overflow-y-auto z-[110]"
            onClick={(e) => e.stopPropagation()}
          >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-b from-primary to-primary-dark p-6 z-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
                <p className="text-white/80 text-sm">Transforming spaces into luxury</p>
              </div>

              {/* Navigation Items */}
              <nav className="px-6 py-8 space-y-2">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-luxury-charcoal hover:bg-luxury-cream hover:pl-7'
                    }`}
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: 'slide-in-right 0.3s ease-out forwards'
                    }}
                  >
                    <span className="text-base font-semibold">{item.name}</span>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      location.pathname === item.href
                        ? 'bg-white'
                        : 'bg-primary opacity-0 group-hover:opacity-100'
                    }`}></div>
                  </Link>
                ))}
              </nav>

              {/* Divider with gradient */}
              <div className="mx-6 h-px bg-gradient-to-r from-transparent via-luxury-silver/30 to-transparent"></div>

              {/* Contact Section */}
              <div className="px-6 py-8">
                <h3 className="text-xs font-bold text-luxury-charcoal/60 uppercase tracking-wider mb-4 px-2">
                  Get In Touch
                </h3>
                
                <div className="space-y-3">
                  <a 
                    href="tel:+60179551698"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-200 group border border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-xs text-luxury-silver/70 font-medium">Phone</span>
                      <span className="text-luxury-charcoal font-semibold">017-9551698</span>
                    </div>
                  </a>

                  <a 
                    href="tel:+60176388993"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-200 group border border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-xs text-luxury-silver/70 font-medium">Phone</span>
                      <span className="text-luxury-charcoal font-semibold">017-6388993</span>
                    </div>
                  </a>

                  <a 
                    href="mailto:info@awadesign.com"
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-200 group border border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-200">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-xs text-luxury-silver/70 font-medium">Email</span>
                      <span className="text-luxury-charcoal font-semibold text-sm">info@awadesign.com</span>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-luxury-cream/50">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-xs text-luxury-silver/70 font-medium">Location</span>
                      <span className="text-luxury-charcoal font-semibold text-sm">Petaling Jaya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="px-6 pb-8">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </Link>
              </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img 
                src={logoImage} 
                alt="AWA Design & Build Logo" 
                className="h-[11rem] w-auto"
              />
              <h3 className="text-2xl font-bold mb-4 whitespace-nowrap">AWA DESIGN & BUILD SDN BHD</h3>
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