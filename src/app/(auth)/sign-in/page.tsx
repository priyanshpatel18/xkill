'use client';

import Auth from '@/components/Auth';
import { Suspense } from 'react';

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Auth
        title="Sign In"
        question="No account?"
        redirectLink="/sign-up"
        redirectText="Sign Up"
      />
    </Suspense>
  );
}
