import React, { Component } from 'react';

import Head from 'next/head'
import styles from '../styles/structure.module.css'

import Nav from '../components/structure/Nav'
import Header from '../components/structure/Header';
import HeaderSpecialty from '../components/structure/HeaderSpecialty';
import MiddleTop from '../components/structure/MiddleTop';
import MiddleBottom from '../components/structure/MiddleBottom';
import Contact from '../components/structure/Contact';
import FooterBottom from '../components/structure/FooterBottom';

import { i18n } from '../translate/i18n';

export default class Index extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          {/* Set page title */}
          <title>{i18n.t('main.title')}</title>

          {/* Set page description */}
          <meta name="description" content="We develop customized systems to connect the physical and digital worlds for our clients. Our expertise in software integrations allows us to create, adapt, and enhance solutions for your company." />

          {/* Set page keywords */}
          <meta name="keywords" content="Java, integration, API, REST, JavaScript, JS, system, software, integration" />

          {/* Set page indexing */}
          <meta name="robots" content="index,follow" />

          {/* Set page favicon */}
          <link rel="shortcut icon" href="/images/favicon.ico" />

          {/* Set up Google Analytics */}
          {/* Temporary Disabled 
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {page_path: window.location.pathname,});`,
            }}
          />
          */}
        </Head>
        <Nav />
        <Header />
        <HeaderSpecialty />
        <MiddleTop />
        <MiddleBottom />
        <Contact />
        <FooterBottom />
      </div>
    )
  }
}