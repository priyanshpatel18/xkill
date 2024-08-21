'use client';

import Auth from '@/components/Auth';

export default function SignIn() {
  return (
    <Auth
      title="Create your Account"
      question="Have an account?"
      redirectLink="/sign-in"
      redirectText="Sign in"
    />
  );
}
