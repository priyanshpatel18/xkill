'use client';

import GithubDark from '@/assets/github-dark.png';
import GithubLight from '@/assets/github-light.png';
import Google from '@/assets/google.png';
import { AppStore } from '@/store/appStore';
import { signIn } from 'next-auth/react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useState } from 'react';
import Logo from './Logo';
import { Button } from './ui/button';

interface AuthProps {
  title: string;
  question: string;
  redirectLink: string;
  redirectText: string;
}

export default function Auth({
  title,
  question,
  redirectLink,
  redirectText,
}: AuthProps) {
  const store = AppStore();
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingGithub, setLoadingGithub] = useState(false);

  const handleAuth = async (provider: string) => {
    if (provider === 'google') {
      setLoadingGoogle(true);
    } else if (provider === 'github') {
      setLoadingGithub(true);
    }
    store.setLoading(true);
    await signIn(provider);
  };

  const getGithubImage = () => {
    return store.theme === 'light' ? GithubLight : GithubDark;
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="rounded-2xl px-8 py-12 bg-card">
        <div className="xkill">
          <Logo isRedirect={true} size={2}></Logo>
          <div className="pb-5"></div>
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[0rem]">
            <span className="font-extrabold text-2xl">{title}</span>
            <span>to continue to xkill</span>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <Button
              className="text-primary bg-background flex gap-[1rem] border-[1px] border-border py-6"
              onClick={() => handleAuth('google')}
              disabled={loadingGoogle || loadingGithub}
            >
              {loadingGoogle ? (
                <div className="loader"></div>
              ) : (
                <Image
                  src={Google}
                  alt="google"
                  className="w-[1.5rem] h-[1.5rem]"
                />
              )}
              <span className="mr-[6rem] md:mr-[10rem] lg:text-[1rem]">
                Continue with Google
              </span>
            </Button>
            <Button
              className="text-primary bg-background flex gap-[1rem] border-[1px] border-border py-6"
              onClick={() => handleAuth('github')}
              disabled={loadingGoogle || loadingGithub}
            >
              {loadingGithub ? (
                <div className="loader"></div>
              ) : (
                <Image
                  src={getGithubImage()}
                  alt="github"
                  className="w-[1.5rem] h-[1.5rem] select-none"
                />
              )}
              <span className="mr-[6rem] md:mr-[10rem] lg:text-[1rem]">
                Continue with Github
              </span>
            </Button>
          </div>
          <span className="text-[0.8rem]">
            {question}{' '}
            <Link href={redirectLink} className="underline">
              {redirectText}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
