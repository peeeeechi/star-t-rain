import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://star-t-rain.vercel.app/sitemap.xml',
    host: 'https://star-t-rain.vercel.app',
  };
}