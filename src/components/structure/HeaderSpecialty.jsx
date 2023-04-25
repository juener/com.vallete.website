import React from 'react'

import { i18n } from '../../translate/i18n';

const HeaderSpecialty = () => (
    <>
        <section id="one" className="wrapper style1 special">
            <div className="inner">
                <header className="major">
                    <h2>{i18n.t('specialty.title')}</h2>
                    <p>{i18n.t('specialty.subTitle')}</p>
                </header>
            </div>
        </section>
    </>
);

export default HeaderSpecialty;