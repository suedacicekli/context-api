import { ThemeContextProvider } from './contexts/ThemeContext';
import { LangContextProvider } from './contexts/LangContext';
import Container from './Container';
import Footer from './components/Footer';

const App = () => (

  <LangContextProvider>
    <ThemeContextProvider >
      <Container />
    </ThemeContextProvider>
    <Footer />
  </LangContextProvider>
);


export default App;
