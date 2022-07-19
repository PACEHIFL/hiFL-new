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
      <Script id="goggle" async src={`https://www.googletagmanager.com/gtag/js?id=G-5YY1TW94PB`}></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-5YY1TW94PB');
        `}
      </Script>
      {/* GOOGLE ANALYTICS TRACKING CODE END */}

      {/* FACEBOOK PIXEL START*/}
      <Script id="facebook">
        {`
         !function(f,b,e,v,n,t,s)
         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
         n.queue=[];t=b.createElement(e);t.async=!0;
         t.src=v;s=b.getElementsByTagName(e)[0];
         s.parentNode.insertBefore(t,s)}(window, document,'script',
         'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '820662048875289');
         fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          className="hidden"
          src="https://www.facebook.com/tr?id=820662048875289&ev=PageView&noscript=1"
        />
      </noscript>
      {/* FACEBOOK PIXEL END */}

      {/* LINKEDIN INSIGHTS CODE START*/}
      <Script id="linkedin">
        {`
         _linkedin_partner_id = "3786476";
         window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
         window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `}
      </Script>
      <Script id="linkedin-analytics">
        {`
         (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          className="hidden"
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=3786476&fmt=gif`}
        />
      </noscript>
      {/* LINKEDIN INSIGHTS CODE END */}

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
