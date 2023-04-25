import React from 'react';

import { i18n } from '../../translate/i18n';

const FooterBottom = () => (
    <>
        <footer id="footer">
            <ul className="icons">
                <li><a href="mailto:website@vallete.com" className="icon fa-envelope"><span className="label">Email</span></a></li>
                <li><a href="https://www.instagram.com/vallete.dev" rel="noreferrer" target="_blank" className="icon brands fa-instagram"><span className="label">Instagram Vallete</span></a></li>
                <li><a href="https://t.me/juener" rel="noreferrer" target="_blank" className="icon brands fa-telegram"><span className="label">Telegram</span></a></li>
                <li><a href="https://wa.me/31629160874" rel="noreferrer" target="_blank" className="icon brands fa-whatsapp"><span className="label">WhatsApp</span></a></li>
            </ul>
            <ul className="copyright">
                <li>{i18n.t('footer.text')}</li>
            </ul>
        </footer>
    </>
);

export default FooterBottom;