import { create } from 'zustand';

interface AppStore {
  theme: string;
  setTheme: (theme: 'light' | 'dark' | 'undefined') => void;
}

export const AppStore = create<AppStore>((set) => ({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark' | 'undefined') => set({ theme }),
}));
