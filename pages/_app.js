import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
