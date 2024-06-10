import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';
import Input from './components/Input/Input';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Input query={query} setQuery={setQuery} />
    </ThemeProvider>
  );
}

export default App;
