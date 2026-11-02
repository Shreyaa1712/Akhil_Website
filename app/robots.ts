import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow policy pages from being crawled (they are also noindex)
        disallow: ['/privacy-policy', '/cookie-policy'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
