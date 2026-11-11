import { useState } from 'react';
import UserList from './UserList'; // Importiamo il componente appena creato

function App() {
  const [attivaCaricamento, setAttivaCaricamento] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [users, setUsers] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Richiesta Dati con Hook Originale</h1>

      {!users ? (
        <button onClick={() => setAttivaCaricamento(true)} disabled={isPending}>
          {isPending ? 'Caricamento avviato...' : 'Carica Utenti'}
        </button>
      ) : (
        <button onClick={() => setUsers(null)} >
          reset
        </button>
      )}

      <hr />

      {attivaCaricamento ? (
        <UserList setIsPending={setIsPending} setUsers={setUsers} />
      ) : (
        <p>Nessun dato caricato. Clicca il bottone per attivare l'hook.</p>
      )}
    </div>
  );
}

export default App;