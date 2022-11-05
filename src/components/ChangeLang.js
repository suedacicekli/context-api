// Context'i kullanmak için react altındaki useContext hookunu kullanacağız.
//2. ilgili context altında hzırladığımız hooku kullanacağımız için useContext hookunu silebildik
// import React from 'react'
// ----import React'a da gerek kalmadı.
//ilgili contexti import edeceğiz
//2. ilgili context altından hazırladığımız hooku çağırdık.
import { useLang } from '../contexts/LangContext';

function ChangeLang() {

    const { lang, setLang } = useLang();

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
