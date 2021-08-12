import Head from 'next/head';
import Content from '../../components/portfolio/caseStudy/content';
import Hero from '../../components/portfolio/caseStudy/hero';
import NextProject from '../../components/portfolio/caseStudy/nextProject';
import Layout from '../../components/portfolio/layout/layout';
import { CASE_STUDIES } from '../../data/dummy';
export default function CaseStudy() {
  const caseStudy = CASE_STUDIES[0];
  return (
    <Layout>
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

      <Hero
        featuredImage={caseStudy.featuredImage}
        title={caseStudy.title}
        myRole={caseStudy.myRole}
        client={caseStudy.client}
        year={caseStudy.year}
      />
      <Content about={caseStudy.about} images={caseStudy.images} />
      <NextProject
        title={caseStudy.readNext.title}
        slug={caseStudy.readNext.slug}
        image={caseStudy.readNext.featuredImage}
      />
    </Layout>
  );
}
