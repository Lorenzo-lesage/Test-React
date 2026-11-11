
// Store
import { useCounter } from '../hooks/useCounter'

export function ZunstandCounter() {

    const {counter, decrement, reset } = useCounter();

    return (
        <div>
            <h1>Componente zunstand</h1>
            <p>{counter}</p>
            <button onClick={decrement}>Decrementa</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}