import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // THis is just to simulate the delay in accessing a DB

        const res = await fetch(url);
        
        if (!res.ok) {
          throw new Error (res.statusText);
        }
        
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (error) {
        setError(`${error.message} (Could not fetch the Data)`);
        console.log(error.message);
        setIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  // return { data, isPending }
  return {
    dataProperty: data,
    pendingProperty: isPending,
    errorProperty: error,
  };
};
