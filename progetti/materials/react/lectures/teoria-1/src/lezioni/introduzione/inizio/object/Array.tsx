/**
 * Array
 * Array of objects
 * From other files
 */

import { Color } from './constants';
import { arrayOfObjects } from './constants';

const availableColors = [`red`, `green`, `blue`, `yellow`, `purple`] as const

type ArticleProps = {
  children: React.ReactNode
  bgColor?: Color
}

const Article = ({ bgColor = `blue`, children }: ArticleProps) => (
  <article
    style={{ marginBottom: `1rem`, backgroundColor: bgColor }}
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

const TextContent = (props: { title: string; subtitle: string; }) => (
  <div className="flex flex-col gap-2 w-full">
    <h2 className="text-2xl font-semibold">{props.title}</h2>
    <p className="text-xs text-gray-400 self-end">{props.subtitle}</p>
  </div>
)


export const WorkWithArray = () => (
  <section className="flex flex-col place-items-center">
    <h1 className="text-5xl font-bold">Work with Array</h1>

    <div>
      {availableColors.map((color, index) => (
        <Article key={color || index} bgColor={color}>
          <TextContent title="title" subtitle="Sottotitolo" bgColor={color} />
        </Article>
      ))}
    </div>

    <div>
      {arrayOfObjects.map((item) => (
        <Article bgColor={item.color} key={item.id}>
          <TextContent title={item.title} subtitle={item.subtitle} />
        </Article>
      ))}
    </div>
  </section>
)