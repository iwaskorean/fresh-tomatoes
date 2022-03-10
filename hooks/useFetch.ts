import { useEffect, useState } from 'react';

function useFetch<T>(query: string, pageNumber: number = 1) {
  const [list, setList] = useState<T[]>([]);
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);
  const baseUrl = 'https://api.themoviedb.org/3';

  useEffect(() => {
    setList([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(
      `${baseUrl}/${query}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then(
        ({ results, total_pages }: { results: T[]; total_pages: number }) => {
          setList((prev) => [...prev, ...results]);
          setHasMore(total_pages > pageNumber);
          setLoading(false);
        }
      )
      .catch((error) => {
        setError(true);
        console.log(error);
        setLoading(false);
      });
  }, [query, pageNumber]);

  return { list, loading, error, hasMore };
}

export default useFetch;
