import Head from "next/head";

export default function CustomHead({title}) {
    const title_full = `${title} - PokeNext`
    return (
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>{title_full}</title>
        </Head>
    )
}