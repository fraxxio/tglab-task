import { useEffect } from 'react';
import { useArticles } from '../../hooks/useArticles';
import ArticleCard from '../ArticleCard/ArticleCard';
import { Container } from './style';

type ArticleListProps = {
  query: string;
};

export default function ArticleList({ query }: ArticleListProps) {
  const { articles, isLoading, isError, size, setSize, hasMore } = useArticles(query);

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

  if (isError) return <div>Error loading articles...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Container>
  );
}
