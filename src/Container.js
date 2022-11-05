import ChangeTheme from './components/ChangeTheme';
import Footer from './components/Footer';
import ChangeLang from './components/ChangeLang';
import { useTheme } from './contexts/ThemeContext';
import './styles.css';

function Container() {
    const { theme } = useTheme();
    console.log(theme)

    return (
        <div className={`container ${theme}`}>
            <ChangeTheme />
            <hr />
            <ChangeLang />
            <Footer />
        </div>
    )
}

export default Container
