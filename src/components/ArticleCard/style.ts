import styled from 'styled-components';

export const Card = styled.a`
  border-radius: ${(props) => props.theme.borderRadius};
  border: 2px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  transition-duration: ${(props) => props.theme.transitionDuration};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 10px 5px ${(props) => props.theme.colors.primary};
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-bottom: solid 2px ${(props) => props.theme.colors.primary};
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};

  &.error {
    object-fit: contain;
  }
`;

export const Title = styled.h1`
  font-size: 1.1rem;
  padding-top: 0.5rem;
  padding-inline: 10px;
  max-height: 4rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-inline: 10px;
  padding-bottom: 5px;

  @media (max-width: 310px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const NewsSite = styled.p`
  padding-top: 0.5rem;
`;

export const Date = styled.p`
  font-size: small;
`;
