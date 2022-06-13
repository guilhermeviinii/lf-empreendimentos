import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Provider } from "next-auth/client";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
  );
}
