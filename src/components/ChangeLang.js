// Context'i kullanmak için react altındaki useContext hookunu kullanacağız.
import React, { useContext } from 'react'
//ilgili contexti import edeceğiz
import LangContext from '../contexts/LangContext';

function ChangeLang() {

    const { lang, setLang } = useContext(LangContext);

    return (
        <div>
            Aktif Dil :{lang}

            <div>
                <button onClick={() => setLang("TR")}>TR</button>
                <button onClick={() => setLang("EN")}>EN</button>
                <button onClick={() => setLang("DE")}>DE</button>
            </div>
        </div>
    )
}

export default ChangeLang
