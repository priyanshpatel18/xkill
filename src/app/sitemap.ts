import { exploreFields } from '@/components/exploreCard/exploreFieldContent';
import type { MetadataRoute } from 'next';

const URL = 'https://www.xkill.tech';
const staticRoutes = [
  '/',
  '/invalidsession',
  '/sign-in',
  '/sign-up',
  '/privacy-policy',
  '/tnc',
  '/explore'
];

function getDynamicRoutes(): string[] {
  const dynamicRoutes: string[] = [];

  exploreFields.forEach(field => {
    dynamicRoutes.push(`/explore/${field.redirectLink}`);

    field.subFields.forEach(subField => {
      dynamicRoutes.push(`/explore/${subField.redirectLink}`);
    });
  });

  return dynamicRoutes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = getDynamicRoutes();

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map(route => {
    return {
      url: `${URL}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/' ? 'yearly' : 'monthly',
      priority: route === '/' ? 1 : 0.8,
    };
  });
}
