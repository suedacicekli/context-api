import { ThemeContextProvider } from './contexts/ThemeContext';
import { LangContextProvider } from './contexts/LangContext';
import Container from './Container';

const App = () => (

  <LangContextProvider>
    <ThemeContextProvider >
      <Container />
    </ThemeContextProvider>

  </LangContextProvider>
);


export default App;
