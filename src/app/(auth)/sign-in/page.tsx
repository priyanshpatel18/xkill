'use client';

import Auth from '@/components/Auth';

export default function SignIn() {
  return (
    <Auth
      title="Sign In"
      question="No account?"
      redirectLink="/sign-up"
      redirectText="Sign Up"
    />
  );
}
