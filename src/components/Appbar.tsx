'use client';

import loginDark from '@/assets/login-dark.png';
import loginLight from '@/assets/login-light.png';
import logoutDark from '@/assets/logout-dark.png';
import logoutLight from '@/assets/logout-light.png';
import menubarDark from '@/assets/menu-dark.png';
import menubarLight from '@/assets/menu-light.png';
import shareDark from '@/assets/share-dark.png';
import shareLight from '@/assets/share-light.png';
import { fonts } from '@/fonts/fonts';
import { AppStore } from '@/store/appStore';
import { signOut, useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ThemeToggler from './ThemeToggler';

export default function Appbar() {
  const store = AppStore();
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>('light');
  const session = useSession();

  useEffect(() => {
    if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setCurrentTheme(prefersDark ? 'dark' : 'light');
      store.setTheme(prefersDark ? 'dark' : 'light');
    } else {
      setCurrentTheme(theme as 'light' | 'dark');
    }
    store.setTheme(theme as 'light' | 'dark');
  }, [theme, store.theme]);

  return (
    <div className="fixed top-0 left-0 w-full bg-appbar h-[10vh] flex items-center justify-between px-[1.5rem]">
      <div className="flex items-center gap-[2rem]">
        <div className="cursor-pointer">
          <Image
            src={currentTheme === 'light' ? menubarLight : menubarDark}
            alt="menuBar"
            className="w-[1.4rem] h-[1.4rem]"
            width={22}
            height={22}
          />
        </div>
        <Link
          className={`${fonts.calSans} text-[2rem] text-primary p-0 cursor-pointer`}
          href="/"
        >
          xkill
        </Link>
      </div>
      <div className="flex items-center gap-[2rem]">
        <div className="cursor-pointer">
          <Image
            src={currentTheme === 'light' ? shareLight : shareDark}
            alt="shareBtn"
            className="w-[1.4rem] h-[1.4rem]"
            width={22}
            height={22}
          />
        </div>
        <ThemeToggler
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        {session.data?.user ? (
          <Link className="cursor-pointer" href="/" onClick={() => signOut()}>
            <Image
              src={currentTheme === 'light' ? logoutLight : logoutDark}
              alt="loginBtn"
              className="w-[1.4rem] h-[1.4rem]"
              width={22}
              height={22}
            />
          </Link>
        ) : (
          <Link className="cursor-pointer" href="/sign-in">
            <Image
              src={currentTheme === 'light' ? loginLight : loginDark}
              alt="loginBtn"
              className="w-[1.4rem] h-[1.4rem]"
              width={22}
              height={22}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
