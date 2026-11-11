// const TextContent = () => (
//   <div className="flex flex-col gap-2 w-full">
//     <h2 className="text-2xl font-semibold">Props Obj</h2>
//     <p className="text-xs text-gray-400 self-end">styled by Tailwind</p>
//   </div>
// )

/*
  Il Props Object è un oggetto che contiene tutte le props passate ad un componente.
  - props è un oggetto.
  - Le props sono passate come argomento della funzione componente.
  - Le props sono accessibili tramite la notazione dot.
  - Le props sono immutabili.
*/





const Article = ({ children } : any) => {
  return (
    <article
      className="card"
    >
      <img
        src="https://picsum.photos/200"
        alt="random"
        className="rounded-sm h-full min-w-16 min-h-16"
      />
      {children}
    </article>
  )
}

const TextContent = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-2xl font-semibold">Props Obj</h2>
      <p className="text-xs text-gray-400 self-end">styled by Tailwind</p>
    </div>
  )
}

export const PropsAdvancedObject = () => (
  <section className="flex flex-col place-items-center">
    <h1 className="text-5xl font-bold">Props Object</h1>
    <div className="flex mt-4 gap-4">
      <Article>
        <TextContent />
      </Article>
    </div>
  </section>
)
