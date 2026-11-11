import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/CounterSlice';

export function Counter() {

    /*
    |------------------------------------------------------------------------
    | Data
    |------------------------------------------------------------------------
    */
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState("");

    /*
    |------------------------------------------------------------------------
    | Methods
    |------------------------------------------------------------------------
    */

    const handleChange = (event) => {
        setAmount(Number(event.target.value))
    }

    /*
    |------------------------------------------------------------------------
    | Return
    |------------------------------------------------------------------------
    */

    return (
        <div>
            <div className='flex flex-col gap-4 justify-center my-3'>
                <input
                    type="number"
                    name="numero"
                    value={amount}
                    onChange={handleChange}
                    className="border border-white rounded-xs p-1 text-white"
                />
                {amount && amount != 0 ?
                    (
                        <p>Il valore da aggiungere che hai selezionato è: {amount}</p>
                    ) : null}

            </div>

            <div className='flex flex-col justify-center items-center gap-4'>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    className='bg-blue-500 rounded-xs px-2 hover:shadow-md cursor-pointer hover:scale-105 transition duration-100 ease-in-out text-black'
                >
                    Increment
                </button>
                <span className='p-3 bg-sky-100 text-black aspect-square text-center'>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    className='bg-blue-800 rounded-xs px-2 hover:shadow-md cursor-pointer hover:scale-105 transition duration-100 ease-in-out text-white'
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(amount))}
                    className='bg-lime-800 rounded-xs px-2 hover:shadow-md cursor-pointer hover:scale-105 transition duration-100 ease-in-out text-white'
                >
                    Incrementa di {amount}
                </button>

            </div>
        </div>
    )
}