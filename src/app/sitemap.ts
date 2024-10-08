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
  const processedDirs: Set<string> = new Set();

  function processDirectory(dirPath: string, routePrefix: string) {
    // Check if this directory has already been processed
    if (processedDirs.has(dirPath)) {
      return;
    }

    // Add the current directory to the set of processed directories
    processedDirs.add(dirPath);

    // Read the contents of the current directory
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    entries.forEach(entry => {
      if (entry.isDirectory()) {
        const isParenthetical = entry.name.startsWith('(') && entry.name.endsWith(')');
        const newRoutePrefix = isParenthetical ? routePrefix : `${routePrefix}/${entry.name}`;

        // Skip directories that are in the exclude list
        if (excludeDirs.includes(entry.name)) {
          return;
        }

        // Add a route for static directories
        if (!dynamicDirs.includes(entry.name)) {
          routes.push({
            url: `${URL}${newRoutePrefix}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
          });
        }

        // Check if the directory is a dynamic route directory
        if (dynamicDirs.includes(entry.name)) {
          const subDir = path.join(dirPath, entry.name);
          const subEntries = fs.readdirSync(subDir, { withFileTypes: true });

          subEntries.forEach(subEntry => {
            if (subEntry.isDirectory()) {
              processDirectory(path.join(subDir, subEntry.name), `${newRoutePrefix}/${subEntry.name}`);
            }
          });
        } else {
          // Recursively process subdirectories
          processDirectory(path.join(dirPath, entry.name), newRoutePrefix);
        }
      }
    });
  }

  // Start processing from the base directory
  processDirectory(fullPath, '');

  const uniqueRoutes = Array.from(new Set(routes.map(route => route.url)))
    .map(url => routes.find(route => route.url === url));

  return uniqueRoutes as MetadataRoute.Sitemap;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getRoutes();
}
