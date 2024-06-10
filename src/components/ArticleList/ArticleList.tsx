import { useEffect } from 'react';
import { useArticles } from '../../hooks/useArticles';
import ArticleCard from '../ArticleCard/ArticleCard';
import { Container, Error, Loading, LoadingMore } from './style';

type ArticleListProps = {
  query: string;
};

export default function ArticleList({ query }: ArticleListProps) {
  const { articles, isLoading, isLoadingMore, isError, size, setSize, hasMore } =
    useArticles(query);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (hasMore) {
      setSize(size + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isError) return <Error>Something went wrong while loading articles.</Error>;
  if (isLoading) return <Loading>Loading articles...</Loading>;

  return (
    <Container>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
      {isLoadingMore && <LoadingMore>Loading more articles...</LoadingMore>}
    </Container>
  );
}
