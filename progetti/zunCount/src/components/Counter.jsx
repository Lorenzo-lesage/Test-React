// Hooks
import { useCounter } from '../hooks/useCounter';

export function Counter() {

    const { counter, decrement, reset } = useCounter();
    return (
        <div className="border border-red-500 w-50 rounded-xl p-2">
            <h1>Sono componente counter</h1>
            <p>{counter}</p>
            <div className='flex justify-center align-center gap-6'>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}