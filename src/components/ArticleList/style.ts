import styled from 'styled-components';
import { container } from '../../styles/mixins';

export const Container = styled.div`
  ${container}
  margin-top: 10rem;
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
