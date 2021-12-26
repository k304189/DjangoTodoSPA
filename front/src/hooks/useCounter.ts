import { useCallback, useState } from 'react';
import axios from "axios";

export type UseCounterReturnType = {
  count: number;
  increment: () => void;
};

export const useCounter = (): UseCounterReturnType => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((n) => n + 1), []);
  const axiosTest = useCallback( async () => {
    const word = await axios.get('/greeting')
    return word
  }, [],);
  return {
    count,
    increment,
    // @ts-ignore
    axiosTest,
  };
};
