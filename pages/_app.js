import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import DefaultLayout from "../components/layout/DefaultLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* GOOGLE ANALYTICS TRACKING CODE START*/}
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-5YY1TW94PB');
        `}
      </Script>
      {/* GOOGLE ANALYTICS TRACKING CODE END */}
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
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
          <ToastContainer theme="colored" />
        </DefaultLayout>
      </Provider>
    </>
  );
}

export default MyApp;
