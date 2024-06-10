type Article = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: { launch_id: string; provider: string }[];
  events: { event_id: number; provider: string }[];
};

type UseArticlesResult = {
  articles: Article[];
  isLoading: boolean;
  isLoadingMore: boolean | undefined;
  isError: any;
  size: number;
  setSize: (size: number | ((size: number) => number)) => void;
  hasMore: boolean;
};
