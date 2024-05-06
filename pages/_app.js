import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Word Pronouncer</title>
        {/* <!-- Google tag (gtag.js) --> */}
        <GoogleAnalytics gaId="G-9RLE5VT5MB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
