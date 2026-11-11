import { useContext } from 'react'

// Context
import { ConuterContext } from '../context/CounterContext';

// Hooks
import { useFetch } from '../hooks/useFetch';

// Components
import { Card } from '../components/Card';

export function Home() {

    const { counter, setCounter } = useContext(ConuterContext);
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    if (error) return <h2 style={{ color: 'red' }}>Errore: {error.message}</h2>;

    return (
        <div>
            <h1>Home</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
            <Card />
            <ul>
                {loading ? (
                    <h2>Caricamento in corso...</h2>
                ) : (
                    data?.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))
                )}
            </ul>
        </div>
    )
}