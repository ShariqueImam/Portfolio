import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key={"title"}>Test APP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Test App for NEXTJS" />
      </Head>
      <div className="overflow-x-hidden" style={{ fontDisplay: "swap" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
