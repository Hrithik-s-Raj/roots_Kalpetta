import { useEffect } from "react";
import Router from "next/router";
import "swiper/swiper-bundle.min.css";
import "assets/css/slick.min.css";
import { initGA, logPageView } from "analytics";
import "typeface-dm-sans";
import "../assets/css/logo.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return <Component {...pageProps} />;
}
