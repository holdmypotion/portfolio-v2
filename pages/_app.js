import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  const routerGA = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    routerGA.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      routerGA.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [routerGA.events]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
