import './App.css';
import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { LangContextProvider } from './contexts/LangContext';
import ChangeLang from './components/ChangeLang';

function App() {
  return (
    <div className='App'>
      <LangContextProvider>
        <ThemeContextProvider >
          <ChangeTheme />
          <hr />
          <ChangeLang />
          <Footer />
        </ThemeContextProvider>
      </LangContextProvider>
    </div>
  );
}

export default App;
