import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
function ChangeTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <div>Aktif Tema : {theme}</div>
            <button onClick={toggleTheme}>ChangeTheme</button>
        </div >
    )
}
export default ChangeTheme