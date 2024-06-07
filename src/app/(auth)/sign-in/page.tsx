'use client';

import GithubDark from '@/assets/github-dark.png';
// import GithubLight from "@/assets/github-light.png";
import Google from '@/assets/google.png';
import { Button } from '@/components/ui/button';
// import { signIn } from "next-auth/react";
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { AppStore } from '@/store/appStore';
import GithubLight from '@/assets/github-light.png';
export default function SignIn() {
  const store = AppStore();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="border-2 border-border rounded-2xl px-8 py-12">
        <div className="xkill"></div>
        <div className="flex flex-col gap-[1rem]">
          <div className="flex flex-col gap-[0rem]">
            <span className="font-extrabold text-2xl">Sign in</span>
            <span>to continue to xkill</span>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <Button
              className="text-primary bg-transparent flex gap-[1rem]  border-2 border-border py-6"
              onClick={() => {
                // signIn("google");
              }}
            >
              <Image
                src={Google}
                alt="google"
                className="w-[1.5rem] h-[1.5rem] "
              />
              <span className="mr-[8rem]">Continue with Google</span>
            </Button>
            <Button
              className="text-primary bg-transparent flex gap-[1rem]  border-2 border-border py-6"
              onClick={() => {
                // signIn("github");
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
              <span className="mr-[8rem]">Continue with Github</span>
            </Button>
          </div>
          <span className="text-xs">
            No Account?{' '}
            <Link href="/sign-up" className="underline">
              Sign-up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}