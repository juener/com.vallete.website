import Head from 'next/head';

export default function Error(props) {
    return (
        <Head>
            <meta http-equiv="refresh" content="0; URL='/'" />
        </Head>
    )
}