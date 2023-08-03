import Head from "next/head";
import { ToastContainer } from "react-toastify";

// IMPORT CSS
import "../styles/homepage.css";
import "../styles/checkout.css";
import "../styles/detail.css";
import "../styles/complete-checkout.css";
import "../styles/sign-in.css";
import "../styles/sign-up.css";
import "../styles/sign-up-photo.css";
import "../styles/sign-up-success.css";
import "../styles/404-not-found.css";
import "../styles/sidebar.css";
import "../styles/overview.css";
import "../styles/transactions.css";
import "../styles/transactions-detail.css";
import "../styles/edit-profile.css";
import "../styles/navbar-log-in.css";
import "../styles/utilities.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>StoreGG | Top Up and Gaming Store</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
