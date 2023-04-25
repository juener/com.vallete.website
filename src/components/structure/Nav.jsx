import Head from 'next/head';

import Image from 'next/image';
import valleteLogo from '/public/images/structure/logoJustDrawingWhite.png';

export default function Nav() {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            </Head>
            <div className="fixed-action-btn">
                <a href="https://privileged.vallete.com" data-target="slide-out" className="sidenav-trigger show-on-large btn-floating btn-large pulse red darken-3"><i className="material-icons"><Image alt="backend" src={valleteLogo} /></i></a>
            </div>
        </>
    );

};
