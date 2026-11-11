import { useContext } from 'react'

// Context
import { ConuterContext } from '../context/CounterContext';

export function Card() {

    const { counter, setCounter } = useContext(ConuterContext);

    return (
        <div className='border border-red'>
            <h1>Card</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
        </div>
    )
}