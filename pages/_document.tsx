import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="description"
                        content="I'm a Full-stack Developer with a passion for building seamless web and server applications. I am always motivated to reach the next level as a full-stack developer and keep learning more about the web and cloud computing."
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
                        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700&family=Noto+Serif:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap"
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
