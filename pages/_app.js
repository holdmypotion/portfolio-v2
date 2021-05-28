import SmoothScroll from "../components/utils/SmoothScroll/SmoothScroll";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SmoothScroll>
        <Component {...pageProps} />
      </SmoothScroll>
    </Layout>
  );
}

export default MyApp;
