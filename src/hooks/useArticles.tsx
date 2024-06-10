import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';
import api from '../lib/api';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

export const useArticles = (query = ''): UseArticlesResult => {
  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.next) return null;
    return `/articles/?search=${query}&limit=10&offset=${pageIndex * 10}`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  return {
    articles: data ? [].concat(...data.map((page) => page.results)) : [],
    isLoading: !error && !data,
    isError: error,
    size,
    setSize,
    hasMore: data ? !!data[data.length - 1]?.next : false,
  };
};
