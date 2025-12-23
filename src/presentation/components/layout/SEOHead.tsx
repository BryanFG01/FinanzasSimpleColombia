import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
}

export const SEOHead = ({ 
  title, 
  description, 
  keywords,
  canonical,
  ogImage = '/og-image.jpg'
}: SEOHeadProps) => {
  const siteUrl = 'https://finanzassimple.co';

  return (
    <Helmet>
      <title>{title} | FinanzasSimple Colombia</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": title,
          "description": description,
          "url": `${siteUrl}${canonical}`,
          "applicationCategory": "FinanceApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "COP"
          }
        })}
      </script>
    </Helmet>
  );
};
