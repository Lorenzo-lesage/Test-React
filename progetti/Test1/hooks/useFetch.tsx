import { useState, useEffect } from 'react';


export default function useFetch<T = null>(url: string) {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    // useEffect(() => {
    //     setLoading(true);
    //     setError(null)

    //     const timer = setTimeout(() => {
    //         fetch(url)
    //             .then(res => res.json())
    //             .then(result => setData(result))
    //             .catch(err =>
    //                 setError(err instanceof Error ? err : new Error(String(err)))
    //             )
    //             .finally(() => setLoading(false));
    //     }, 2000); 

    //     return () => clearTimeout(timer);
    // }, [url])

    useEffect(() => {

        const timer = setTimeout(() => {

            async function fetchData() {
                try {
                    setLoading(true)
                    const res = fetch(url);

                    if (!res.ok) {
                        throw new Error(`HTTP Error: ${res.status}`);
                    }
                    const result = await res.json();
                    setData(result);

                } catch (err) {
                    if (err instanceof Error) {
                        err
                    }
                    new Error(string(err))
                } finally {
                    setLoading(false)
                }
            }

            fetchData();

        }, 200);

        return () => clearTimeout(timer)

    }, [url])

    return { data, loading, error }
}