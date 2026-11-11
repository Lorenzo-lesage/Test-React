import React, { useContext } from 'react';
import { ButtonTheme } from "../components/ButtonTheme";
import { ThemeContext } from './context/ThemeProvider';


export function Home() {

    const { theme } = useContext(ThemeContext);
    return (
        <div className={`p-8 h-screen ${theme === 'dark' ? 'dark' : ''}`}>
         <h1>Ciao</h1>
         <ButtonTheme />
        </div>
    );
}