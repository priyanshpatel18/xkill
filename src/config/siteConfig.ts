import { Metadata } from 'next';

const TITLE = 'xkill';
const DESCRIPTION =
  'xkill is an all-in-one platform built for the tech industry. It helps you prepare for interviews, upgrade your skill, and grow your career.';
const BASE_URL = 'https://www.xkill.tech';

const siteConfig: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${TITLE}`,
  },
  description: DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: TITLE,
  creator: 'Priyansh Patel',
  category: 'Tech Industry, Career Development',
  alternates: {
    canonical: BASE_URL,
  },
  keywords: [
    'tech interviews',
    'career growth',
    'job preparation',
    'tech industry',
    'interview preparation',
    'job search',
    'career advice',
  ],
  metadataBase: new URL(BASE_URL),
};

export default siteConfig;
