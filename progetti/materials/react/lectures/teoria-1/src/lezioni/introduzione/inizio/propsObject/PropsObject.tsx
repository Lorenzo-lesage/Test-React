/*
  Il Props Object è un oggetto che contiene tutte le props passate ad un componente.
  - props è un oggetto.
  - Le props sono passate come argomento della funzione componente.
  - Le props sono accessibili tramite la notazione dot.
  - Le props sono immutabili.
*/

/*
const Titolo = () => <h2 className="text-2xl font-semibold">Tailwind Card</h2>
const Paragrafo = () => (
  <p className="text-xs text-gray-400 self-end">styled by Tailwind</p>
)

const TextContent = () => (
  <div className="flex flex-col gap-2 w-full">
    <Titolo />
    <Paragrafo />
  </div>
)
*/

const avaibleColors = ['red', 'blue', 'yellow', 'purple', 'green']

type ArticleProps = {
  tittle?: string
  subtitle?: string
  bgColor?: 1 | 2 | 3 | 4 | 5
  style?: React.CSSProperties 
}

const Article = (props: ArticleProps) => {

  console.log(props);
  let selectedColor = props.bgColor;

  if (selectedColor === undefined) {
    selectedColor = 3
  }

  const bgSelectedColor = avaibleColors[selectedColor - 1];

  return (
    <article
      style={{
        marginBottom: `1rem`,
        backgroundColor: bgSelectedColor,
        ...props.style
      }}
      className="card"
    >
      <img
        src="https://picsum.photos/200"
        alt="random"
        className="rounded-sm h-full min-w-16 min-h-16"
      />
      <div className="flex flex-col gap-2 w-full">
        <h2> {props?.tittle}</h2>
        <p> {props?.subtitle}</p>
      </div>    
      </article>
  )
}

export const PropsObject = () => (
  <section className="flex flex-col place-items-center">
    <h1 className="text-5xl font-bold">Props Object</h1>
    <div className="flex mt-4 gap-4">
      <Article 
      tittle="Titolo" 
      subtitle="Sottotitolo" 
      bgColor={1}
      style={{
        transform: 'rotate(5deg)'
      }}
      />
      <Article 
      tittle="Titolo2" 
      subtitle="Sottotitolo2" 
      bgColor={4} 
       style={{
        transform: 'rotate(-5deg)'
      }}
      />
    </div>
  </section>
)
