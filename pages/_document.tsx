import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="description"
                        content="Solving problems and struggling to learn something new every day motivates me more than anything."
                    />
                    <meta name="robots" content="index, follow" />
                    <link rel="icon" href="/favicon.png" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700;900&family=IBM+Plex+Sans:wght@400;700&family=JetBrains+Mono&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
