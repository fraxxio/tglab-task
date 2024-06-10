import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';
import api from '../lib/api';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const useArticles = (query = ''): UseArticlesResult => {
  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.next) return null;
    return `/articles/?search=${query}&limit=12&offset=${pageIndex * 12}`;
  };

  const { data, error, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher);

  return {
    articles: data ? [].concat(...data.map((page) => page.results)) : [],
    isLoading: !error && !data,
    isLoadingMore: isValidating && data && data.length > 0,
    isError: error,
    size,
    setSize,
    hasMore: data ? !!data[data.length - 1]?.next : false,
  };
};
