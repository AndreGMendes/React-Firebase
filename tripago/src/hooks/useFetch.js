import { useState, useEffect, useRef } from "react";

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);



  // Use useRef tyo wrap an Object/array argument
  // which is a useEffect dependency
  const options = useRef(_options).current

  useEffect(() => { 

    console.log(options);
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // THis is just to simulate the delay in accessing a DB

        const res = await fetch(url, {signal: controller.signal});
        
        if (!res.ok) {
          throw new Error (res.statusText);
        }
        
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (error) {

        if (error.name === 'AbortError') {
          console.log('The fetch was aborted')
        
        
        } else {

          setError(`${error.message} (Could not fetch the Data)`);
          console.log(error.message);
          setIsPending(false);

        }

      }
    };

    fetchData();

    return () => controller.abort()
    

  }, [url, options]);

  // return { data, isPending }
  return {
    dataProperty: data,
    pendingProperty: isPending,
    errorProperty: error
  };
};
