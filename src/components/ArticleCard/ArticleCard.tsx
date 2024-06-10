import { useState } from 'react';
import { Card, CardInfo, Date, NewsSite, Thumbnail, Title } from './style';

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const [isError, setIsError] = useState(false);
  const hImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsError(true);
    e.currentTarget.src = '../../../public/NoImage.png';
    e.currentTarget.onerror = null;
  };
  return (
    <Card href={article.url} target='_blank' rel='noopener noreferrer'>
      <Thumbnail
        src={article.image_url}
        loading='lazy'
        alt={article.title}
        onError={hImageError}
        className={isError ? 'error' : ''}
      />
      <Title>{article.title || 'No title'}</Title>
      <CardInfo>
        <NewsSite>{article.news_site || 'Unknown'}</NewsSite>
        <Date>{article.published_at.substring(0, 10)}</Date>
      </CardInfo>
    </Card>
  );
}
