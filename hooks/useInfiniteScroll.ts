import { Dispatch, SetStateAction, useCallback, useRef } from 'react';
import useFetch from './useFetch';

function useInfiniteScroll<T>(
  query: string,
  pageNumber: number = 1,
  handlePageNumber: Dispatch<SetStateAction<number>>
) {
  const { list, loading, error, hasMore } = useFetch<T>(query, pageNumber);

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLElement) => {
      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          handlePageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore, handlePageNumber]
  );

  return { list, loading, error, lastElementRef };
}

export default useInfiniteScroll;
