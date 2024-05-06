import "@/styles/globals.css";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Word Pronouncer</title>
        {/* <!-- Google tag (gtag.js) --> */}
        <GoogleTagManager gaId="G-9RLE5VT5MB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
