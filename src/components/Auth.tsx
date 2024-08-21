'use client';

import GithubDark from '@/assets/github-dark.png';
import GithubLight from '@/assets/github-light.png';
import Google from '@/assets/google.png';
import { AppStore } from '@/store/appStore';
import { signIn } from 'next-auth/react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
// import { useRef } from 'react';
import { toast } from 'sonner';
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

  const searchParams = useSearchParams();
  const router = useRouter();
  const status = searchParams.get('status');
  // Hot Reload while development
  // const prevStatusRef = useRef<string | null>(null);

  // // Comment before pushing
  // useEffect(() => {
  //   if (status && status !== prevStatusRef.current) {
  //     if (status === '200') {
  //       router.push('/');
  //       toast.success('Welcome to xkill!');
  //     } else {
  //       toast.error('Something went wrong, Try Again!');
  //     }
  //     prevStatusRef.current = status;
  //   }
  // }, [status]);

  // Comment out before pushing
  useEffect(() => {
    if (status) {
      if (status === '200') {
        toast.success('Welcome to xkill!');
        router.push('/');
      } else {
        toast.error('Something went wrong, Try Again!');
      }
    }
  }, [status]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="border-2 border-border rounded-2xl px-8 py-12">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[0rem]">
            <span className="font-extrabold text-2xl capitalize">{title}</span>
            <span>to continue to xkill</span>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <Button
              className="text-primary bg-transparent flex gap-[1rem] border-2 border-border py-6"
              onClick={() => {
                signIn('google');
              }}
            >
              <Image
                src={Google}
                alt="google"
                className="w-[1.5rem] h-[1.5rem]"
              />
              <span className="mr-[6rem] md:mr-[10rem] lg:text-[1rem]">
                Continue with Google
              </span>
            </Button>
            <Button
              className="text-primary bg-transparent flex gap-[1rem] border-2 border-border py-6"
              onClick={() => {
                signIn('github');
              }}
            >
              {store.theme === 'light' ? (
                <Image
                  src={GithubLight}
                  alt="github"
                  className="w-[1.5rem] h-[1.5rem]"
                />
              ) : (
                <Image
                  src={GithubDark}
                  alt="github"
                  className="w-[1.5rem] h-[1.5rem]"
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
