import Head from "next/head";

export default function CustomHead({title}) {
    return (
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>{title} - PokeNext</title>
        </Head>
    )
}