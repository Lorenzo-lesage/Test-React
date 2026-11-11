import React from 'react';
import { useThemeStore } from '../store/useThemeStore';

export function ButtonTheme() {
    const theme = useThemeStore((state) => state.theme);
    const toggleTheme = useThemeStore((state) => state.toggleTheme);

    return (
        <button 
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 bg-accent text-background font-bold rounded"
        >
          Attiva tema {theme === 'light' ? 'Scuro' : 'Chiaro'}
        </button>
    );
}