import "../styles/globals.css";
import Head from "next/head";
import DefaultLayout from "../components/layout/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="football, league, hifl, sports, university" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Higher Institution Football League is a competition between various universities in Nigeria"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>HiFL | Higher Institutions Football League </title>
      </Head>
      <>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </>
    </>
  );
}

export default MyApp;
