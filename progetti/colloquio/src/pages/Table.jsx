import { useEffect, useState } from "react"

export function Table() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(result => setData(result))
    }, [])


    return (
        <div className="flex justify-center">
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((post) => (
                        <tr key={post.id}>
                            <td>
                                {post.userId}
                            </td>
                            <td>
                                {post.id}
                            </td>
                            <td>
                                {post.title}
                            </td>
                            <td>
                                {post.body}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}