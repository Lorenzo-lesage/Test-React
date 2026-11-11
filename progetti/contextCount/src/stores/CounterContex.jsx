import { createContext, useState } from "react";

export const CounterContext = createContext()

export function CounterProvider({children}) {

    const[counter, setCounter] = useState(0);

    return (
        <CounterContext value={{counter, setCounter}}>
            {children}
        </CounterContext>
    )

}