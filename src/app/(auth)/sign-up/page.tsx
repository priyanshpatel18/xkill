'use client';

import Auth from '@/components/Auth';
import { Suspense } from 'react';

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Auth
        title="Create your Account"
        question="Have an account?"
        redirectLink="/sign-in"
        redirectText="Sign in"
      />
    </Suspense>
  );
}
