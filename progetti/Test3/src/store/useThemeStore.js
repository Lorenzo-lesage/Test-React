import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'light',
  
  toggleTheme: () => set((state) => {
    const nextTheme = state.theme === 'light' ? 'dark' : 'light';
    
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    
    return { theme: nextTheme };
  }),
}));