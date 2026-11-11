// Provider
import { CounterPorvider } from './providers/CounterProvider'

// Components
import { Home } from './pages/Home'
import { ZunstandCounter } from './components/ZunstandCounter';

// Hooks
import { useCounter } from './hooks/useCounter'

function App() {

  const { counter, increment } = useCounter();

  return (
    <CounterPorvider>
      <h1>Hello World!</h1>
      <Home />
      <p>Valore di zunstand: {counter}</p>
      <button onClick={increment}>Incrementa zunstand</button>
      <ZunstandCounter />
    </CounterPorvider>
  )
}

export default App
