import React, { useContext } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import LangContext from '../contexts/LangContext';

function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useContext(LangContext);
  return (
    <div >
      <hr />
      Footer

      <div>
        Aktif dil : {lang}
      </div>
      <br />
      <div>
        Aktif tema : {theme}
      </div>
      <br />
      <button onClick={toggleTheme}>Temayı Değiştir</button>

    </div>
  )
}

export default Footer
