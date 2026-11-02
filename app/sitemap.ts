import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // No trailing slash – matches next.config.ts (no trailingSlash: true set)
  const routes = [
    { path: '',          priority: 1.0, freq: 'weekly'  as const },
    { path: '/about',    priority: 0.9, freq: 'monthly' as const },
    { path: '/services', priority: 0.9, freq: 'monthly' as const },
    { path: '/work',     priority: 0.8, freq: 'monthly' as const },
    { path: '/academic', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact',  priority: 0.8, freq: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, freq: 'yearly' as const },
    { path: '/cookie-policy',  priority: 0.3, freq: 'yearly' as const },
  ];

  const serviceSlugs = [
    'wto-dispute-settlement',
    'trade-defence',
    'customs-and-importation',
    'esg-and-regulatory-advisory',
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...serviceEntries];
}
