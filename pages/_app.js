import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key={"title"}>Shariq Imam | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="sharique Imam Portfolio sharique shariq sharriq"
        />
      </Head>
      <div className="overflow-x-hidden" style={{ fontDisplay: "swap" }}>
        <AnimatePresence>
          <Component {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
