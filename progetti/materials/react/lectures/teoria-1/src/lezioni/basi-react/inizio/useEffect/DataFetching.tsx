import { FC, useEffect, useState } from "react"
import { dataPlaceholder, type Data, jsonplacholderUrl } from "./constants"

export const DataFetching = () => {
  const [posts, setPosts] = useState<Data[]>([])

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    setTimeout(() => {
      const fetchPosts = async () => {
        try {
          const res = await fetch(`${jsonplacholderUrl}/posts`)
          const data = await res.json() as Data
          setError(null)
          setPosts(data)
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message)
          }

          setError('Ce stato un errore')
        } finally {
          setLoading(false)
        }
      }
      fetchPosts()
    }, 2000);
  }, [])


  if (error) return <div>{error}</div>
  return (
    <div>
      <h1>Posts</h1>
      <div className="flex flex-col gap-4 mt-6">
        {
          loading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="card flex flex-col gap-2 justify-start items-start max-w-[500px] w-full h-auto"
              >
                <h2 className="text-xl font-semibold">Caricamento...</h2>
                <p>Caricamento....</p>
              </div>
            ))
          ) : (
            posts.map((post) => (
              <Article key={post.id} {...post} />
            ))
          )
        }
      </div>
    </div>
  )
}

const Article: FC<Data> = ({ title, body }) => (
  <article className="card flex flex-col gap-2 justify-start items-start max-w-[500px] w-full h-auto">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p>{body}</p>
  </article>
)
