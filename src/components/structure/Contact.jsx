import React from 'react'

import { i18n } from '../../translate/i18n';

const Contact = () => (
    <>
        <section id="cta" className="wrapper style4">
            <div className="inner">
                <header style={{ margin: 'auto' }}>
                    <h2>{i18n.t('contact.title')}</h2>
                    <p>{i18n.t('contact.subTitle')}</p>
                </header>
                <ul className="actions stacked">
                    <li><a href="mailto:website@vallete.com" className="button fit primary">Email</a></li>
                    <li><a href="https://www.instagram.com/vallete.dev" rel="noreferrer" target="_blank" className="button fit" >Instagram</a></li>
                    <li><a href="https://linkedin.com/in/juener" rel="noreferrer" target="_blank" className="button fit primary" >LinkedIn</a></li>
                    <li><a href="https://t.me/juener" rel="noreferrer" target="_blank" className="button fit" >Telegram</a></li>
                    <li><a href="https://wa.me/31629160874" rel="noreferrer" target="_blank" className="button fit primary" >WhatsApp</a></li>
                </ul>
            </div>
        </section>
    </>
);

export default Contact;