import React from 'react'

import { i18n } from '../../translate/i18n';

const MiddleBottom = () => (
    <>
        <section id="three" className="wrapper style3 special">
            <div className="inner">
                <header className="major">
                    <h2>{i18n.t('middleBottom.title')}</h2>
                    <p>{i18n.t('middleBottom.subTitle')}</p>
                </header>
                <ul className="features">
                    <li className="icon  solid fa-coffee">
                        <h3>{i18n.t('middleBottom.u1Title')}</h3>
                        <p>{i18n.t('middleBottom.u1SubTitle')}</p>
                    </li>
                    <li className="icon solid fa-laptop">
                        <h3>{i18n.t('middleBottom.u2Title')}</h3>
                        <p>{i18n.t('middleBottom.u2SubTitle')}</p>
                    </li>
                    <li className="icon solid fa-desktop">
                        <h3>{i18n.t('middleBottom.u3Title')}</h3>
                        <p>{i18n.t('middleBottom.u3SubTitle')}</p>
                    </li>
                    <li className="icon solid fa-code">
                        <h3>{i18n.t('middleBottom.u4Title')}</h3>
                        <p>{i18n.t('middleBottom.u4SubTitle')}</p>
                    </li>
                </ul>
            </div>
        </section>
    </>
);

export default MiddleBottom;