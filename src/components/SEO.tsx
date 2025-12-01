import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: 'website' | 'article';
}

const defaultKeywords = 'AWA, AWA design, AWA design and build, AWA renovation, AWA contractor, Petaling Jaya renovation, PJ renovation, interior design Malaysia, interior design Petaling Jaya, renovation contractor PJ, home renovation PJ, kitchen renovation Petaling Jaya, bathroom renovation PJ';

export default function SEO({
  title = 'AWA Design & Build | Interior Design & Renovation Contractor Petaling Jaya',
  description = 'AWA Design & Build SDN BHD - Your trusted interior design & renovation contractor in Petaling Jaya (PJ), Malaysia. Specializing in residential, commercial design, kitchen & bathroom renovation.',
  keywords = defaultKeywords,
  canonicalUrl = 'https://awadesign.com.my/',
  ogImage = 'https://awadesign.com.my/favicon.png',
  type = 'website',
}: SEOProps) {
  const fullTitle = title.includes('AWA') ? title : `${title} | AWA Design & Build`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
