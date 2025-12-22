// Projects page
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Square, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import SEO from '@/components/SEO';
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
import dutaMb from '@/assets/duta-mb.png';
import dutaBed1 from '@/assets/duta-bed1.png';
import dutaBed2 from '@/assets/duta-bed2.png';
import dutaLiv2 from '@/assets/duta-liv2.png';
import dutaDining2 from '@/assets/duta-dining2.png';
import dutaKit1 from '@/assets/duta-kit1.png';
import dutaKit2 from '@/assets/duta-kit2.png';
import nidozFoyer1 from '@/assets/nidoz-foyer-1.png';
import nidozFoyer2 from '@/assets/nidoz-foyer-2.png';
import nidozLiv1 from '@/assets/nidoz-liv-1.png';
import nidozLiv2 from '@/assets/nidoz-liv-2.png';
import nidozGaming from '@/assets/nidoz-gaming.png';
import nidozGirls from '@/assets/nidoz-girls.png';
import nidozMums from '@/assets/nidoz-mums.png';
import bangiDining1 from '@/assets/bangi-dining-1.png';
import bangiDining2 from '@/assets/bangi-dining-2.png';
import bangiKit1 from '@/assets/bangi-kit-1.png';
import bangiKit2 from '@/assets/bangi-kit-2.png';
import bangiLaundry1 from '@/assets/bangi-laundry-1.png';
import bangiLaundry2 from '@/assets/bangi-laundry-2.png';
import bangiStoreroom from '@/assets/bangi-storeroom.png';
import tropikaB1 from '@/assets/tropika-b1.png';
import tropikaLiv2 from '@/assets/tropika-liv-2.png';
import tropikaMasterBath from '@/assets/tropika-master-bath.png';
import tropikaMb1 from '@/assets/tropika-mb1.png';
import tropikaMb2 from '@/assets/tropika-mb2.png';
import tropikaMb3 from '@/assets/tropika-mb3.png';
import tropikaTvWall from '@/assets/tropika-tv-wall.png';
import panoramaBed1 from '@/assets/panorama-bed-1.png';
import panoramaMb from '@/assets/panorama-mb.png';
import panoramaLiv from '@/assets/panorama-liv.png';
import panoramaDisplay from '@/assets/panorama-display.png';
import panoramaDryKitchen from '@/assets/panorama-dry-kitchen.png';
import panoramaYard from '@/assets/panorama-yard.png';
import panoramaKitchen from '@/assets/panorama-kitchen.png';
import panoramaFoyer from '@/assets/panorama-foyer.png';
import lakesKitchen1 from '@/assets/lakes-kitchen-1.png';
import lakesKitchen2 from '@/assets/lakes-kitchen-2.png';
import lakesLiving from '@/assets/lakes-living.png';
import lakesMasterBath from '@/assets/lakes-master-bath.png';
import lakesMaster from '@/assets/lakes-master.png';
import lakesStudy from '@/assets/lakes-study.png';
import lakesDryKitchen from '@/assets/lakes-dry-kitchen.png';
import lakesFoyer from '@/assets/lakes-foyer.png';
import lakesGuest from '@/assets/lakes-guest.png';
import awaOfficeGf1 from '@/assets/awa-office-gf1.png';
import awaOfficeGf2 from '@/assets/awa-office-gf2.png';
import awaOfficeGf4 from '@/assets/awa-office-gf4.png';
import awaOfficeGf5 from '@/assets/awa-office-gf5.png';
import awaOfficeGf6 from '@/assets/awa-office-gf6.png';
import awaOffice1f1 from '@/assets/awa-office-1f1.png';
import awaOffice1f2 from '@/assets/awa-office-1f2.png';
import awaOffice1f3 from '@/assets/awa-office-1f3.png';
import awaOffice1f4 from '@/assets/awa-office-1f4.png';
import awaOffice1f5 from '@/assets/awa-office-1f5.png';
import awaOffice1f6 from '@/assets/awa-office-1f6.png';
import awaOffice1f8 from '@/assets/awa-office-1f8.png';
import awaOfficeGf3 from '@/assets/awa-office-gf3.png';
import awaOfficeLogo from '@/assets/awa-office-logo.png';
import dvineB1 from '@/assets/dvine-b1.png';
import dvineMb from '@/assets/dvine-mb.png';
import dvineLiv from '@/assets/dvine-liv.png';
import dvineKit from '@/assets/dvine-kit.png';
import stellaDining from '@/assets/stella-dining.png';
import stellaKit from '@/assets/stella-kit.png';
import stellaLiv from '@/assets/stella-liv.png';
import stellaSofa from '@/assets/stella-sofa.png';
import stellaMbWall from '@/assets/stella-mb-wall.png';
import stellaMbBed from '@/assets/stella-mb-bed.png';
import stellaMbWardrobe from '@/assets/stella-mb-wardrobe.png';
import stellaStudy from '@/assets/stella-study.png';
import sv2Dining from '@/assets/sv2-dining.png';
import sv2Liv from '@/assets/sv2-liv.png';
import sv2Mb from '@/assets/sv2-mb.png';
import spKidsBedroom from '@/assets/sp-kids-bedroom.jpg';
import spMasterBedroom from '@/assets/sp-master-bedroom.jpg';
import spGirlsBedroom from '@/assets/sp-girls-bedroom.jpg';
import spLiving from '@/assets/sp-living.jpg';
import spDining from '@/assets/sp-dining.jpg';
import spKitchen1 from '@/assets/sp-kitchen-1.jpg';
import spKitchen2 from '@/assets/sp-kitchen-2.jpg';
import dutaParkDining from '@/assets/duta-park-dining.png';
import dutaParkLiving from '@/assets/duta-park-living.png';
import dutaParkBedroom from '@/assets/duta-park-bedroom.jpg';
import uptownKitchen1 from '@/assets/uptown-kitchen-1.jpg';
import uptownKitchen2 from '@/assets/uptown-kitchen-2.jpg';
import uptownKitchen3 from '@/assets/uptown-kitchen-3.jpg';
import uptownBathroom from '@/assets/uptown-bathroom.jpg';
import uptownHallway1 from '@/assets/uptown-hallway-1.jpg';
import uptownDining from '@/assets/uptown-dining.jpg';
import uptownHallway2 from '@/assets/uptown-hallway-2.jpg';
import uptownLiving from '@/assets/uptown-living.jpg';
import uptownBedroom1 from '@/assets/uptown-bedroom-1.jpg';
import uptownBedroom2 from '@/assets/uptown-bedroom-2.jpg';
import uptownKitchen4 from '@/assets/uptown-kitchen-4.jpg';
import uptownKitchen5 from '@/assets/uptown-kitchen-5.jpg';
import uptownKitchen6 from '@/assets/uptown-kitchen-6.jpg';
import uptownLiving2 from '@/assets/uptown-living-2.jpg';
import uptownLiving3 from '@/assets/uptown-living-3.jpg';
import serene1Dining from '@/assets/serene1-dining.jpg';
import serene1Laundry from '@/assets/serene1-laundry.jpg';
import serene1Bathroom from '@/assets/serene1-bathroom.jpg';
import serene1Kitchen from '@/assets/serene1-kitchen.jpg';
import serene1Bedroom1 from '@/assets/serene1-bedroom-1.jpg';
import serene1Bookshelf from '@/assets/serene1-bookshelf.jpg';
import serene1Bedroom2 from '@/assets/serene1-bedroom-2.jpg';
import serene1Kids from '@/assets/serene1-kids.jpg';
import serene1Wardrobe from '@/assets/serene1-wardrobe.jpg';
import serene1Kitchen2 from '@/assets/serene1-kitchen-2.jpg';
import serene1Master from '@/assets/serene1-master.jpg';
import serene1Kitchen3 from '@/assets/serene1-kitchen-3.jpg';
import serene1Kitchen4 from '@/assets/serene1-kitchen-4.jpg';
import serene1Pantry from '@/assets/serene1-pantry.jpg';
import serene1Wardrobe2 from '@/assets/serene1-wardrobe-2.jpg';
import serene1Living1 from '@/assets/serene1-living-1.jpg';
import serene1Living2 from '@/assets/serene1-living-2.jpg';
import serene1Kitchen5 from '@/assets/serene1-kitchen-5.jpg';
import serene1Display from '@/assets/serene1-display.jpg';
import serene1Living3 from '@/assets/serene1-living-3.jpg';
import serene1Kitchen6 from '@/assets/serene1-kitchen-6.jpg';
import serene1Kitchen7 from '@/assets/serene1-kitchen-7.jpg';
import serene1Dining2 from '@/assets/serene1-dining-2.jpg';
import serene1Dining3 from '@/assets/serene1-dining-3.jpg';
import serene1TvWall from '@/assets/serene1-tv-wall.jpg';
import serene1Dining4 from '@/assets/serene1-dining-4.jpg';
import serene1Dining5 from '@/assets/serene1-dining-5.jpg';
import serene1Hallway from '@/assets/serene1-hallway.jpg';
import serene1Wardrobe3 from '@/assets/serene1-wardrobe-3.jpg';
import serene1Island from '@/assets/serene1-island.jpg';
import serene1Display2 from '@/assets/serene1-display-2.jpg';
import serene1Utility from '@/assets/serene1-utility.jpg';
import serene1Kitchen8 from '@/assets/serene1-kitchen-8.jpg';
import serene1Kitchen9 from '@/assets/serene1-kitchen-9.jpg';
import serene1DryKitchen from '@/assets/serene1-dry-kitchen.jpg';
import serene1Living4 from '@/assets/serene1-living-4.jpg';
import serene1Study from '@/assets/serene1-study.jpg';
import serene1TvWall2 from '@/assets/serene1-tv-wall-2.jpg';
import serene1Bedroom3 from '@/assets/serene1-bedroom-3.jpg';

const categories = ['All', 'Residential', 'Office'];

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
    title: 'DUTA',
    category: 'Residential',
    location: 'Kuala Lumpur',
    year: '2024',
    area: '1,400 sq ft',
    image: dutaLiv2,
    description: 'Modern residential interior featuring sophisticated bedroom designs, elegant dining area, contemporary living space, and functional kitchen with premium finishes.',
    tags: ['Modern', 'Elegant', 'Contemporary'],
    gallery: [
      dutaMb,
      dutaBed1,
      dutaBed2,
      dutaLiv2,
      dutaDining2,
      dutaKit1,
      dutaKit2,
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
  {
    id: 5,
    title: 'BANGI LANDED',
    category: 'Residential',
    location: 'Bangi, Selangor',
    year: '2025',
    area: '1,700 sq ft',
    image: bangiDining1,
    description: 'Modern landed property featuring elegant dining areas, functional kitchen spaces, efficient laundry room, and organized storage solutions.',
    tags: ['Modern', 'Functional', 'Contemporary'],
    gallery: [
      bangiDining1,
      bangiDining2,
      bangiKit1,
      bangiKit2,
      bangiLaundry1,
      bangiLaundry2,
      bangiStoreroom,
    ],
  },
  {
    id: 6,
    title: 'TROPIKA',
    category: 'Residential',
    location: 'Malaysia',
    year: '2025',
    area: '1,600 sq ft',
    image: tropikaLiv2,
    description: 'Modern residential interior featuring elegant bedrooms, luxurious bathrooms, and contemporary living spaces with sophisticated TV wall design.',
    tags: ['Modern', 'Elegant', 'Luxury'],
    gallery: [
      tropikaLiv2,
      tropikaTvWall,
      tropikaMb1,
      tropikaMb2,
      tropikaMb3,
      tropikaB1,
      tropikaMasterBath,
    ],
  },
  {
    id: 7,
    title: 'PANORAMA',
    category: 'Residential',
    location: 'Malaysia',
    year: '2025',
    area: '1,400 sq ft',
    image: panoramaLiv,
    description: 'Contemporary residential design featuring minimalist bedrooms, modern living spaces, elegant dining area with display shelving, and sleek kitchen spaces.',
    tags: ['Contemporary', 'Minimalist', 'Modern'],
    gallery: [
      panoramaLiv,
      panoramaDisplay,
      panoramaBed1,
      panoramaMb,
      panoramaDryKitchen,
      panoramaKitchen,
      panoramaYard,
      panoramaFoyer,
    ],
  },
  {
    id: 8,
    title: 'LAKES',
    category: 'Residential',
    location: 'Malaysia',
    year: '2025',
    area: '1,500 sq ft',
    image: lakesLiving,
    description: 'Comprehensive residential design featuring modern kitchen spaces, sophisticated bedrooms including study and guest rooms, elegant master bathroom, welcoming foyer, and stylish living area.',
    tags: ['Modern', 'Elegant', 'Functional'],
    gallery: [
      lakesLiving,
      lakesDryKitchen,
      lakesKitchen1,
      lakesKitchen2,
      lakesMaster,
      lakesStudy,
      lakesGuest,
      lakesMasterBath,
      lakesFoyer,
    ],
  },
  {
    id: 9,
    title: 'AWA OFFICE',
    category: 'Office',
    location: 'Petaling Jaya, Selangor',
    year: '2025',
    area: '3,000 sq ft',
    image: awaOfficeGf4,
    description: 'Professional office space featuring modern workstations, collaborative meeting rooms, elegant reception area, and functional display zones showcasing material samples and lighting solutions.',
    tags: ['Commercial', 'Office', 'Professional'],
    gallery: [
      awaOfficeLogo,
      awaOfficeGf1,
      awaOfficeGf2,
      awaOfficeGf3,
      awaOfficeGf4,
      awaOfficeGf5,
      awaOfficeGf6,
      awaOffice1f1,
      awaOffice1f2,
      awaOffice1f3,
      awaOffice1f4,
      awaOffice1f5,
      awaOffice1f6,
      awaOffice1f8,
    ],
  },
  {
    id: 10,
    title: "D'VINE",
    category: 'Residential',
    location: 'Malaysia',
    year: '2025',
    area: '1,200 sq ft',
    image: dvineLiv,
    description: 'Contemporary residential design featuring elegant living space with marble accents, modern bedroom designs, and functional kitchen with premium finishes.',
    tags: ['Modern', 'Contemporary', 'Elegant'],
    gallery: [
      dvineLiv,
      dvineMb,
      dvineB1,
      dvineKit,
    ],
  },
  {
    id: 11,
    title: '8TH STELLA',
    category: 'Residential',
    location: 'Malaysia',
    year: '2025',
    area: '1,400 sq ft',
    image: stellaLiv,
    description: 'Modern residential design featuring sophisticated living spaces, elegant dining area, contemporary kitchen, luxurious bedrooms with study, and stylish wardrobe solutions.',
    tags: ['Modern', 'Elegant', 'Contemporary'],
    gallery: [
      stellaLiv,
      stellaSofa,
      stellaDining,
      stellaKit,
      stellaMbWall,
      stellaMbBed,
      stellaMbWardrobe,
      stellaStudy,
    ],
  },
  {
    id: 12,
    title: 'Sunway Velocity 2',
    category: 'Residential',
    location: 'Kuala Lumpur, Malaysia',
    year: '2025',
    area: '1,000 sq ft',
    image: sv2Liv,
    description: 'Contemporary condominium with modern living spaces, elegant dining area, and comfortable bedroom design.',
    tags: ['Modern', 'Contemporary', 'Minimalist'],
    gallery: [
      sv2Liv,
      sv2Dining,
      sv2Mb,
    ],
  },
  {
    id: 13,
    title: 'SUNWAY PERDANA',
    category: 'Residential',
    location: 'Petaling Jaya, Malaysia',
    year: '2025',
    area: '1,300 sq ft',
    image: spLiving,
    description: 'Modern residential design featuring elegant living space, contemporary bedrooms including master and kids rooms, stylish dining area, and functional kitchen with premium finishes.',
    tags: ['Modern', 'Contemporary', 'Family'],
    gallery: [
      spLiving,
      spDining,
      spMasterBedroom,
      spKidsBedroom,
      spGirlsBedroom,
      spKitchen1,
      spKitchen2,
    ],
  },
  {
    id: 14,
    title: 'DUTA PARK',
    category: 'Residential',
    location: 'Kuala Lumpur, Malaysia',
    year: '2024',
    area: '1,200 sq ft',
    image: dutaParkLiving,
    description: 'Modern residential design featuring elegant living space, contemporary dining area, and sophisticated bedroom design with premium finishes.',
    tags: ['Modern', 'Contemporary', 'Elegant'],
    gallery: [
      dutaParkLiving,
      dutaParkDining,
      dutaParkBedroom,
    ],
  },
  {
    id: 15,
    title: 'UPTOWN RESIDENCE',
    category: 'Residential',
    location: 'Malaysia',
    year: '2024',
    area: '1,100 sq ft',
    image: uptownLiving,
    description: 'Modern residential interior featuring contemporary kitchen with grey cabinetry, elegant living spaces, stylish dining area, and comfortable bedrooms with natural lighting.',
    tags: ['Modern', 'Minimalist', 'Contemporary'],
    gallery: [
      uptownLiving,
      uptownLiving2,
      uptownLiving3,
      uptownDining,
      uptownKitchen1,
      uptownKitchen2,
      uptownKitchen3,
      uptownKitchen4,
      uptownKitchen5,
      uptownKitchen6,
      uptownBedroom1,
      uptownBedroom2,
      uptownBathroom,
      uptownHallway1,
      uptownHallway2,
    ],
  },
  {
    id: 16,
    title: 'Sunway Serene 1',
    category: 'Residential',
    location: 'Petaling Jaya, Malaysia',
    year: '2024',
    area: '1,600 sq ft',
    image: serene1Dining,
    description: 'Elegant residential design featuring classic wainscoting dining area, luxurious bathroom with bathtub, custom bookshelf wall unit, modern kitchen with built-in appliances, and charming kids bedroom.',
    tags: ['Elegant', 'Classic', 'Modern'],
    gallery: [
      serene1Living1,
      serene1Living2,
      serene1Dining,
      serene1Bathroom,
      serene1Kitchen,
      serene1Kitchen2,
      serene1Kitchen3,
      serene1Kitchen4,
      serene1Kitchen5,
      serene1Pantry,
      serene1Master,
      serene1Bookshelf,
      serene1Bedroom1,
      serene1Bedroom2,
      serene1Kids,
      serene1Wardrobe,
      serene1Wardrobe2,
      serene1Laundry,
      serene1Display,
      serene1Living3,
      serene1Kitchen6,
      serene1Kitchen7,
      serene1Dining2,
      serene1Dining3,
      serene1TvWall,
      serene1Dining4,
      serene1Dining5,
      serene1Hallway,
      serene1Wardrobe3,
      serene1Island,
      serene1Display2,
      serene1Utility,
      serene1Kitchen8,
      serene1Kitchen9,
      serene1DryKitchen,
      serene1Living4,
      serene1Study,
      serene1TvWall2,
      serene1Bedroom3,
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
      <SEO 
        title="Past Projects Portfolio | AWA Design & Build Interior Design PJ"
        description="View AWA Design & Build's portfolio of completed interior design and renovation projects in Petaling Jaya, Malaysia. Residential, commercial, kitchen, bathroom renovations."
        keywords="AWA design portfolio, interior design projects PJ, renovation projects Petaling Jaya, home renovation before after, AWA design and build projects, interior design Malaysia portfolio"
        canonicalUrl="https://awadesign.com.my/#/projects"
      />
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
              <Link to="/contact" className="btn-primary px-8 py-4 rounded-lg text-lg font-medium">
                Start Your Project
              </Link>
              <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-luxury-charcoal px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-300">
                Contact Us Today
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;