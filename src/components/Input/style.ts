import styled from 'styled-components';
import { container } from '../../styles/mixins';

export const Container = styled.div`
  ${container}
  margin-block: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 3px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  outline: none;
  transition-duration: 200ms;
  &:focus {
    border-color: white;
  }
`;
