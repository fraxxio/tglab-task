import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';
import Input from './components/Input/Input';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Input />
    </ThemeProvider>
  );
}

export default App;
