import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div >
      <hr />
      Footer
      <div>
        Aktif tema : {theme}
      </div>
      <button onClick={toggleTheme}>Temayı Değiştir</button>
    </div>
  )
}

export default Footer
