import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html prefix="og: http://ogp.me/ns#">
                <Head>
                    {/*Favicons*/}
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍄</text></svg>"/>
                    {/*inter web font*/}
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
                    {/*font awesome icons*/}
                    <script src="https://kit.fontawesome.com/aeb9fcb31a.js" crossOrigin="anonymous"></script>

                    {/*metadata*/}
                    <meta
                        property="og:title"
                        content="Nataliya Karmarkar"
                    />
                    <meta
                        name="image"
                        property="og:image"
                        content="/preview_thumbnail.jpg"
                    />
                    <meta
                        name="author"
                        content="Nataliya Karmarkar"
                    />
                    <meta
                        property="og:description"
                        content="Learn more about me and what I'm up to!"
                    />
                    <meta
                        property="og:url"
                        content="https://www.nataliyakarmarkar.com" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument