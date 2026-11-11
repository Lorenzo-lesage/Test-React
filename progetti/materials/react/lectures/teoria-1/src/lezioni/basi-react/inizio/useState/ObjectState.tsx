import { useState } from "react"

const initialState = [`red`, `green`, `blue`, `yellow`, `purple`]
const darkColors = [`black`, `gray`, `darkblue`, `darkgreen`]

/*
 export const ObjectState = () => {

  const [colors, setColors] = useState(initialState)

  const handleDarkColors = () => {
    setColors((prevColors) => {
      if (prevColors.some((color) => darkColors.includes(color))) {
        return prevColors
      }
      return [...prevColors, ...darkColors]
    })
  }


  return (
    <div className="max-w-5xl container flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">Colori</h1>
      <div className="flex gap-4">
        <button type="button" className="btn-primary" onClick={() => setColors(initialState)}>
          Reset
        </button>
        <button
          type="button"
          className="btn-primary bg-gray-600 hover:bg-gray-900"
          onClick={handleDarkColors}
        >
          Add dark colors
        </button>
      </div>
      {colors.map((color, index) => (
        <Item
          key={index}
          titolo={color}
          // onClick={() => console.log(`Cliccato ${color}`)}
          onClick={() => setColors(colors.filter((_, i) => i !== index))}
        />
      ))}
    </div>
  )
}
 */


export const ObjectState = () => {
  const [objColors, setObjColors] = useState({
    colors: initialState,
    darkColors: false,
  })

  const handleDarkColors = () => {
    if (objColors.darkColors) return;

    setObjColors((prevColors) => ({
      ...prevColors,
      colors: [...prevColors.colors, ...darkColors],
      darkColors: true
    }))

  }

  const removeColor = (index: number) => {
    setObjColors((prev) => {
      const newColors = prev.colors.filter((_, i) => i !== index)
      return {
        colors: newColors,
        darkColors: newColors.some((color) => darkColors.includes(color))
      }
    })

  }

  const resetColors = () => {
    setObjColors({
      colors: initialState,
      darkColors: false,
    })
  }

  return (
    <div className="max-w-5xl container flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold">Colori</h1>
      <div className="flex gap-4">
        <button type="button" className="btn-primary" onClick={resetColors}>
          Reset
        </button>
        <button
          type="button"
          className="btn-primary bg-gray-600 hover:bg-gray-900"
          onClick={handleDarkColors}
        >
          Add dark colors
        </button>
      </div>
      {objColors.colors.map((color, index) => (
        <Item key={color} titolo={color} onClick={() => removeColor(index)} />
      ))}
    </div>
  )
}

type ItemProps = {
  titolo?: string
  onClick: () => void
}

const Item = ({ titolo, onClick }: ItemProps) => (
  <div className="card justify-between">
    <h2 className="text-3xl font-bold">{titolo}</h2>
    <button type="button" className="btn-disruptive" onClick={onClick}>
      ❌
    </button>
  </div>
)
