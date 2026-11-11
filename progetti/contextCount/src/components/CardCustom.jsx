import { useContext } from "react"
import { CounterContext } from "../stores/CounterContex"

// UI
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function CardCustom() {

    const { counter } = useContext(CounterContext)

    return (
            <Card className="relative mx-auto w-full max-w-sm pt-0 bg-secondary/90 shadow-lg backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                    src="https://picsum.photos/200/300"
                    alt="Event cover"
                    className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                />
                <CardHeader>
                    <CardAction>
                        <Badge variant="secondary">Featured</Badge>
                    </CardAction>
                    <CardTitle>Design systems meetup</CardTitle>
                    <CardDescription>
                        <p>{counter}</p>
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button className="w-full">View Event</Button>
                </CardFooter>
            </Card>
        )
}