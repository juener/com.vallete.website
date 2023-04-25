import React, { useEffect, useState } from 'react';

import { i18n } from '../../translate/i18n';

import Image from 'next/image';
import brazilianFlag from '/public/images/home/brazilian-flag.svg';
import americanFlag from '/public/images/home/american-flag.svg';

const I18N_STORAGE_KEY = 'i18nextLng';

export default function Header() {
    const [language, setLanguage] = useState(['en-US'])

    const handleSelectChange = event => {
        localStorage.setItem(
            I18N_STORAGE_KEY,
            event.target.value
        )
        window.location = window.location;
    }

    useEffect(() => {
        setLanguage(localStorage.getItem(I18N_STORAGE_KEY));
    }, []);

    return (
        <>
            {/* <select onChange={handleSelectChange} value={language} multiple={false}>
                <option value="en-US">English </option>
                <option value="pt-BR">Português <img src="/public/images/home/brazil-flag.svg" /></option>
            </select> */}
            <div className='language' onChange={handleSelectChange}>
                <input type="radio" id="pt" name="language" value="pt-BR" className="pt" checked={language === "pt-BR"} onChange={(e) => { setLanguage(e.target.value) }} />
                <label htmlFor="pt"><Image src={brazilianFlag} alt="Portuguese" /></label>
                <input type="radio" id="en" name="language" value="en-US" className='en' checked={language === "en-US"} onChange={(e) => { setLanguage(e.target.value) }} />
                <label htmlFor="en" ><Image src={americanFlag} alt="English" /></label>
            </div>
            <section id="banner">
                <div className="inner">
                    <div id="logo" />
                    <h2>{i18n.t('header.title')}</h2>
                    <p><i>{i18n.t('header.subTitle')}</i></p>
                </div>
            </section>
        </>
    );
}