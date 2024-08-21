import fs from 'fs';
import type { MetadataRoute } from 'next';
import path from 'path';

const URL = 'https://www.xkill.tech';
const baseDir = 'src/app';
const dynamicDirs = ['explore'];
const excludeDirs = ['api'];

function getRoutes(): MetadataRoute.Sitemap {
  const fullPath = path.join(process.cwd(), baseDir);
  const routes: MetadataRoute.Sitemap = [];

  function processDirectory(dirPath: string, routePrefix: string) {
    const entries = fs.readdirSync(fullPath, { withFileTypes: true });

    entries.forEach(entry => {
      if (entry.isDirectory()) {
        const isParenthetical = entry.name.startsWith('(') && entry.name.endsWith(')');

        const newRoutePrefix = isParenthetical ? routePrefix : `${routePrefix}/${entry.name}`;

        if (excludeDirs.includes(entry.name)) {
          return;
        }

        if (dynamicDirs.includes(entry.name)) {
          processDirectory(path.join(dirPath, entry.name), newRoutePrefix);
        } else {
          routes.push({
            url: `${URL}${newRoutePrefix}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
          });

          // Recursively process subdirectories
          processDirectory(path.join(dirPath, entry.name), newRoutePrefix);
        }
      }
    });
  }

  processDirectory(fullPath, '');

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getRoutes();
}
