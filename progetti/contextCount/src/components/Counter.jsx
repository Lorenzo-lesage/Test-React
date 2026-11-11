import { useContext } from "react"
import { CounterContext } from "../stores/CounterContex"

// Components
import { CardCustom } from "./CardCustom"

// UI
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Counter() {

    const { counter, setCounter } = useContext(CounterContext)

    return (
        <div>
            <h1>Counter</h1>
            <Badge variant="secondary" className="flex items-center gap-2 rounded-lg px-4 py-4"> 
                <p>{counter}</p>
                <Button variant="outline" size="sm" onClick={() => setCounter((prev) => prev + 1)}>
                    +
                </Button>
                <Button variant="outline" size="sm" onClick={() => setCounter((prev) => prev - 1)}>
                    -
                </Button>
            </Badge>

            <CardCustom />
        </div>
    )
}