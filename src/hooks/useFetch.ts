import { useState, useEffect } from "react";

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * The useFetch hook in React is a custom hook designed to simplify and encapsulate the logic for fetching data from an API.
 * It leverages built-in React hooks like useState and useEffect to manage the state of the data,
 * loading status, and potential errors during the fetching process.
 * @param url The URL to fetch data from
 * @param options Optional request options to customize the fetch request (e.g., method, headers, body, mode, cache, credentials).
 * @returns { data, loading, error } or abort signal.
 */
const useFetch = <T>(url: string, options?: RequestInit): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { ...options, signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          console.log("Fetch aborted");
        } else if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
