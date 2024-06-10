import styled, { keyframes } from 'styled-components';
import { container } from '../../styles/mixins';

export const Container = styled.div`
  ${container}
  margin-block: 10rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const LoadingMore = styled.p`
  text-align: center;
  width: 100%;
  grid-column: span 3;

  @media (max-width: 890px) {
    grid-column: span 2;
  }
  @media (max-width: 550px) {
    grid-column: span 1;
  }
`;

const flash = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const Loading = styled.p`
  ${container}
  text-align:center;
  font-size: 2rem;
  padding-top: 5rem;
  animation: ${flash} 2s infinite;
`;

export const Error = styled.p`
  ${container}
  text-align:center;
  color: red;
  font-size: 1.5rem;
`;
