import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from "./components/Counter";

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state: number) => state);

  return (
    <Counter
      value={value}
      onIncrement={() => dispatch({ type: 'INCREMENT' })}
      onDecrement={() => dispatch({ type: 'DECREMENT' })}
    />
  );
}

export default App;
