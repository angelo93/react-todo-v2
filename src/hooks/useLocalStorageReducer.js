import { useReducer, useEffect } from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
  // Create storage state based off of key
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (error) {
      val = defaultVal;
    }

    return val;
  });

  // Use useEffect to update local storage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;
