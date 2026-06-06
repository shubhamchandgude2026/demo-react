import { useEffect, useState } from 'react';

const useFetchUsers = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Fetch failed");

        const result = await res.json();
        setData(result); // Removed the array wrapping here
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default useFetchUsers;