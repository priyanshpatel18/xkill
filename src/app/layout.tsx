import Appbar from '@/components/Appbar';
import Toaster from '@/components/ui/sonner';
import siteConfig from '@/config/siteConfig';
import { fonts } from '@/fonts/fonts';
import { Providers } from '@/components/Providers';
import { ReactNode } from 'react';
import './globals.css';
import Footer from '@/components/footer/Footer';

export const metadata = siteConfig;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${fonts.productSans}`}>
        <Providers>
          <Toaster position="bottom-right" />
          <Appbar />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
