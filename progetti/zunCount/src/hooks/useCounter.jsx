import { useCounterStore } from '../stores/useCounterStore';


export function useCounter() {

  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  
  return {counter, increment, decrement, reset};

}