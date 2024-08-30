'use client';

import Toaster from '@/components/ui/sonner';
import { signOut } from 'next-auth/react';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

export default function InvalidSession() {
  useEffect(() => {
    signOut({
      callbackUrl: '/login',
    });
    toast('Too many devices connected. Logging out!', {
      action: {
        label: 'Close',
        onClick: () => toast.dismiss(),
      },
    });
  });

  return (
    <div>
      <Toaster />
    </div>
  );
}