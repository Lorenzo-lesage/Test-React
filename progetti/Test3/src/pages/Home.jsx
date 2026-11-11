import React, { useContext } from 'react';
import { ButtonTheme } from "../components/ButtonTheme";

// Store
import { useThemeStore } from '../store/useThemeStore';


export function Home() {

   const theme = useThemeStore((state) => state.theme);

    return (
        <div className="p-8 h-screen">
         <h1>Ciao</h1>
         <p>{theme}</p>
         <ButtonTheme />
        </div>
    );
}