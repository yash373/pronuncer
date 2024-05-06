import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Word Pronouncer</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9RLE5VT5MB"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9RLE5VT5MB');
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
