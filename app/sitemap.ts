import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arlegal.eu';

  // Define all static routes in the application
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/work',
    '/academic',
    '/contact',
    '/privacy-policy',
    '/disclaimer',
    '/cookie-policy',
  ];

  // Define dynamic service slugs
  const serviceSlugs = [
    'wto-dispute-settlement',
    'trade-defence',
    'customs-and-importation',
    'esg-and-regulatory-advisory',
  ];

  const routes = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
