import React from 'react'

import { i18n } from '../../translate/i18n';

import Image from 'next/image';
import knowHowLarge from '/public/images/home/knowHowLarge.png';
import whenStartedLarge from '/public/images/home/whenStartedLarge.png';
import profileJuener from '/public/images/home/profile.jpg';


const MiddleTop = () => (
    <>
        <section id="two" className="wrapper alt style2">
            <section className="spotlight">
                <div className="image"><Image src={knowHowLarge} alt="know-how" /></div><div className="content">
                    <h2>{i18n.t('middleTop.title1')}</h2>
                    <p>
                        {i18n.t('middleTop.subTitle1part1')}
                        <br />
                        {i18n.t('middleTop.subTitle1part2')}
                        <br />
                        {i18n.t('middleTop.subTitle1part3')}
                    </p>
                </div>
            </section>
            <section className="spotlight">
                <div className="image"><Image src={whenStartedLarge} alt="when all started" /></div><div className="content">
                    <h2>{i18n.t('middleTop.title2')}</h2>
                    <p>
                        {i18n.t('middleTop.subTitle2part1')}
                        <br />
                        {i18n.t('middleTop.subTitle2part2')}
                        <br />
                        {i18n.t('middleTop.subTitle2part3')}
                    </p>
                </div>
            </section>
            <section className="spotlight">
                <div>
                <Image src={profileJuener} alt="juener's profile" />
                </div>
                <div className="content">
                    <h2>
                        {i18n.t('middleTop.title3part1')}
                        <br />
                        {i18n.t('middleTop.title3part2')}
                    </h2>
                    <i>{i18n.t('middleTop.subTitle3part1')}</i>
                    <p>
                        <br />
                        {i18n.t('middleTop.subTitle3part2')}
                        <br />
                        {i18n.t('middleTop.subTitle3part3')}
                    </p>
                </div>
            </section>
        </section>
    </>
);

export default MiddleTop;