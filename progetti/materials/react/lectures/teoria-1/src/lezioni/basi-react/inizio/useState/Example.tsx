import { useState } from "react"
/* eslint-disable react/function-component-definition */

const defaultTitle = 'Hello, World';

export function Example() {

  const [titolo, setTitolo] = useState(defaultTitle)

  function traduciTitolo() {
    setTitolo('Ciao, mondo!')
  }

  return (
    <div className="max-w-5xl container flex flex-col items-center">
      <h2 className="text-6xl font-bold mb-4">{titolo}</h2>
      <button type="button" onClick={traduciTitolo}>
        Traduci
      </button>
    </div>
  )
}
