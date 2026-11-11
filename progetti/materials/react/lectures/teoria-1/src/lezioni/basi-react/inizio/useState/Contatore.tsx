import { useState } from "react"

export const Contatore = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((prev) => prev - 1)
  }


  const delayIncrement = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1)
    }, 4000)
  }

  return (
    <section className="container flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 bg-zinc-800 border border-zinc-700 w-fit p-8 rounded-lg">
        <h1>Contatore</h1>
        <div className="px-4 py-2 bg-zinc-700 rounded-md">
          <p>{count}</p>
        </div>
      </div>
      <div className="flex gap-4 item-center my-5">
        <button
          // onClick={() => setCount((prev) => prev - 1)}
          onClick={decrement}
        >
          -
        </button>
        <button
          //onClick={() => setCount((prev) => prev + 1)}
          //onClick={increment}
          onClick={delayIncrement}
        >
          +
        </button>
      </div>
    </section>
  )
}
