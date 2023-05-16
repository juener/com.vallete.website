import Image from 'next/image';
import valleteLogo from '/public/images/structure/logoJustDrawingWhite.png';

export default function Nav() {

    return (
        <>
            <div className='backend'>
                <a href="https://privileged.vallete.com"><Image alt="backend" src={valleteLogo} /></a>
            </div>
        </>
    );

};
