import type { MetadataRoute } from 'next';

const { appName, description } = {
  appName: 'xkill',
  description: 'xkill is an all-in-one platform built for the tech industry. It helps you prepare for interviews, upgrade your skill, and grow your career.'
};

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appName,
    short_name: appName,
    description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
