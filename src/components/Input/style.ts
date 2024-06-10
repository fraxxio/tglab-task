import styled from 'styled-components';
import { container } from '../../styles/mixins';

export const Container = styled.div`
  ${container}
  margin-block: 2rem;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  border-radius: ${(props) => props.theme.borderRadius || '8px'};
  border: 3px solid ${(props) => props.theme.colors.primary || '#25a69c'};
  background-color: ${(props) => props.theme.colors.secondary || '#22302d'};
  color: ${(props) => props.theme.colors.primary || '#25a69c'};
  font-weight: bold;
  outline: none;
  transition-duration: ${(props) => props.theme.transitionDuration};

  &:focus {
    border-color: white;
  }

  &[type='search']::-webkit-search-cancel-button {
    background: green;
  }
`;

export const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${(props) => props.theme.colors.primary || '#25a69c'};
`;
