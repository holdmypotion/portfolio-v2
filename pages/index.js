import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import Layout from '../components/portfolio/layout/layout';
import HeroSection from '../components/portfolio/home/heroSection';
import ProjectSection from '../components/portfolio/home/projectSection';
import { Button } from '../styles/blog/globalStyles';
import { CASE_STUDIES, SERVICES } from '../data/dummy';
import Services from '../components/portfolio/home/services';
import Contact from '../components/portfolio/home/contact';
import USP from '../components/portfolio/home/usp';
import About from '../components/portfolio/home/about';

export default function Home() {
  return (
    <Layout isHome>
      <Head>
        <title>Rahsand | Portfolio</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='I develop websites and I develop them good! | Articles on frontend, book notes, UI designs, and much more.'
        />
        <meta name='author' content='Rahul Sharma'></meta>
        <meta name='copyright' content='2021 | Rahul Sharma'></meta>
        <meta name='robots' content='index, follow'></meta>
        <meta property='og:type' content='website'></meta>
        <meta property='og:url' content='https://www.rahsand.tech/'></meta>
        <meta property='og:title' content='Rahsand | Blog'></meta>
        <meta
          property='og:description'
          content='I develop websites and I develop them good! | Articles on frontend, book notes, UI designs, and much more.'
        />
        <meta property='og:site_name' content='Rahsand | Blog'></meta>
        <meta property='twitter:site' content='@holdmypotionn'></meta>
        <meta property='twitter:title' content='Rahsand | Blog'></meta>
        <meta
          property='twitter:description'
          content='I develop websites and I develop them good! | Articles on frontend, book notes, UI designs, and much more.'
        />
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='@holdmypotionn' key='twhandle' />
        {/* <meta property="og:image" content="Enter url"></meta> */}
        <meta property='forem:domain' content='rahsand.tech'></meta>
        <link rel='canonical' href='https://www.rahsand.tech/'></link>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeroSection />
      <About />
      <ProjectSection
        subHeading='Selected Projects'
        heading='Case Studies'
        projects={CASE_STUDIES}
      />
      <USP />
      <Services services={SERVICES} />
      <Contact />
    </Layout>
  );
}
