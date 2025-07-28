import { useEffect, useReducer } from 'react';
import { presenter, service } from '../../configuration';

const useCounter = ()  => {
  const [counter, dispatch] = useReducer((_,newValue) => newValue, { counterValue: 0 });

  useEffect(() => {
    presenter.addCallback(dispatch);
    service.getCounterValue();
    return () => presenter.removeCallback(dispatch);
  }, []);

  return {
    counter,
    addToCounter: () => service.updateCounter(1)
  };
}

export const CounterCard = () => {
  const {counter, addToCounter} = useCounter();

  return <div style={{display: "flex", gap: "1rem", marginBottom: "1rem"}}>
    <div>{counter.counterValue}</div>
    <button onClick={addToCounter}>click</button>
  </div>
}
