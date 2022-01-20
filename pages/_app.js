import { useEffect } from "react";
import TagManager from "react-gtm-module";
import Layout from "../components/Layout";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps, router }) {
  ReactGA.initialize("UA-93924635-43");

  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-NHBRDKR" });
  }, []);

  useEffect(() => {
    ReactGA.pageview(document.location.href);
    router.events.on("routeChangeComplete", () => {
      ReactGA.pageview(document.location.href);
    });

    return () => {
      router.events.off("routeChangeComplete", ReactGA.pageview(router.asPath));
    };
  }, [router]);

  return (
    <Layout>
      <main className="main" id="content">
        <Component {...pageProps} key={router.route} />
      </main>
    </Layout>
  );
}

export default MyApp;
