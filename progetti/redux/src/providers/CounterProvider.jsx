import { useState } from "react";

// Context
import { ConuterContext } from "../context/CounterContext";

export function CounterPorvider({ children }) {

    const [counter, setCounter] = useState(0);

    return (
        <ConuterContext value={{counter, setCounter}}>
            {children}
        </ConuterContext>
    )
}