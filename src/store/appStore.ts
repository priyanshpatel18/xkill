import { create } from 'zustand';

interface AppStore {
  theme: string;
  setTheme: (theme: 'light' | 'dark' | 'undefined') => void;

  Loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const AppStore = create<AppStore>((set) => ({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark' | 'undefined') => set({ theme }),

  Loading: false,
  setLoading: (loading: boolean) => set({ Loading: loading }),
}));
