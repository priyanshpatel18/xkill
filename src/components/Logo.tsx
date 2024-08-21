import React from 'react';
import { fonts } from '@/fonts/fonts';
import { Link } from 'next-view-transitions';

export default function Logo({
  isRedirect,
}: {
  size?: number;
  isRedirect: boolean;
}) {
  return isRedirect ? (
    <Link
      href="/"
      className={`${fonts.calSans} text-[2rem] text-primary p-0 cursor-pointer`}
    >
      xkill
    </Link>
  ) : (
    <div
      className={`${fonts.calSans} text-[2rem] text-primary p-0 cursor-pointer`}
    >
      xkill
    </div>
  );
}
