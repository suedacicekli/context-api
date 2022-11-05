import React, { useContext } from 'react'
import ChangeTheme from './components/ChangeTheme';
//import Footer from './components/Footer';
import ChangeLang from './components/ChangeLang';
import ThemeContext from './contexts/ThemeContext';
import './styles.css';

function Container() {
    const { theme } = useContext(ThemeContext);
    console.log(theme)

    return (
        <div className={`container ${theme}`}>
            <ChangeTheme />
            <hr />
            <ChangeLang />

        </div>
    )
}

export default Container
