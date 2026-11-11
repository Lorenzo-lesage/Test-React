// Hooks
import { useCounter } from './hooks/useCounter';

// Components
import { Counter } from './components/Counter';

function App() {

  const { counter, increment } = useCounter();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <div className='flex justify-center'>
        <Counter />
      </div>
    </div>
  )
}

export default App
