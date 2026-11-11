import { useContext } from 'react';

//Hooks
import { useTheme } from '../hooks/useTheme';

export function ButtonTheme() {

    const { theme, toggleTheme } = useTheme();

    return <button onClick={toggleTheme}>{theme}</button>;
}