import { useEffect } from 'react';

import useFetch from '../hooks/useFetch';
import type { User } from "../types/userInterface";

interface UserListProps {
  setIsPending: (pending: boolean) => void;
  setUsers:(pending: boolean) => void;
}

export default function UserList({ setIsPending, setUsers }: UserListProps) {
    // L'hook è quello vecchio/automatico: parte appena UserList viene renderizzato
    const { data, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

    useEffect(() => {
        setIsPending(loading);
        setUsers(data)
    }, [loading, setIsPending, data]);

    if (loading) return <h2>Caricamento in corso...</h2>;
    if (error) return <h2 style={{ color: 'red' }}>Errore: {error.message}</h2>;

    return (
        <ul>
            {data?.map((u) => (
                <li key={u.id}>
                    <strong>{u.name}</strong> ({u.username})
                    <p>Email: {u.email}</p>
                </li>
            ))}
        </ul>
    );
}