'use client';

import { Link } from 'next-view-transitions';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-appbar p-4 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-[3rem] font-bold">xkill</span>
        </Link>
        <div>
          <span className="text-lg font-semibold mb-2 block">Quick Links</span>
          <div className="flex flex-col">
            <Link href="/tnc">
              <span className="">Terms & Conditions</span>
            </Link>
            <Link href="/privacy-policy">
              <span className="">Privacy Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
