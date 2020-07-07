import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  // Create storage state based off of key
  const [state, setState] = useState(() => {
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

  return [state, setState];
}

export default useLocalStorageState;
