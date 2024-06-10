import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { Container, SearchIcon, SearchInput, SearchInputWrapper } from './style';

type InputProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function Input({ query, setQuery }: InputProps) {
  const [inputValue, setInputValue] = useState(query);
  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    setQuery(debouncedValue);
  }, [debouncedValue, setQuery]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <Container>
      <SearchInputWrapper>
        <SearchIcon
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-search'
        >
          <circle cx='11' cy='11' r='8' />
          <path d='m21 21-4.3-4.3' />
        </SearchIcon>
        <SearchInput
          placeholder='Search articles...'
          type='search'
          value={inputValue}
          onChange={handleChange}
        />
      </SearchInputWrapper>
    </Container>
  );
}
