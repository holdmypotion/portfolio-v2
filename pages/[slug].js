import Head from "next/head";
import Content from "../components/portfolio/caseStudy/content";
import Hero from "../components/portfolio/caseStudy/hero";
import NextProject from "../components/portfolio/caseStudy/nextProject";
import Layout from "../components/portfolio/layout/layout";

import { createClient } from "contentful";
import Panels from "../components/blog/UI/Panels";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "caseStudies",
  });

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "caseStudies",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { caseStudy: items[0] },
    revalidate: 1,
  };
};

export default function CaseStudy({ caseStudy }) {
  if (!caseStudy) return <div>loading</div>;
  caseStudy = caseStudy.fields;
  return (
    <Layout>
      <Head>
        <title>Rahsand | {caseStudy.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="I build websites and I build them good! | Articles on frontend, book notes, UI designs, and much more."
        />
        <meta name="author" content="Rahul Sharma"></meta>
        <meta name="copyright" content="2021 | Rahul Sharma"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.rahsand.tech/"></meta>
        <meta property="og:title" content="Rahsand | Blog"></meta>
        <meta
          property="og:description"
          content="I build websites and I build them good! | Articles on frontend, book notes, UI designs, and much more."
        />
        <meta property="og:site_name" content="Rahsand | Blog"></meta>
        <meta property="twitter:site" content="@holdmypotionn"></meta>
        <meta property="twitter:title" content="Rahsand | Blog"></meta>
        <meta
          property="twitter:description"
          content="I build websites and I build them good! | Articles on frontend, book notes, UI designs, and much more."
        />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@holdmypotionn" key="twhandle" />
        {/* <meta property="og:image" content="Enter url"></meta> */}
        <meta property="forem:domain" content="rahsand.tech"></meta>
        <link rel="canonical" href="https://www.rahsand.tech/"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Panels />
      <Hero
        featuredImage={caseStudy.featuredImage}
        title={caseStudy.title}
        myRole={caseStudy.myRole}
        client={caseStudy.client}
        year={caseStudy.year}
      />
      <Content about={caseStudy.about} images={caseStudy.images} />
      {caseStudy.readNext && (
        <NextProject
          title={caseStudy.readNext.fields.title}
          slug={caseStudy.readNext.fields.slug}
          image={caseStudy.readNext.fields.featuredImage}
        />
      )}
    </Layout>
  );
}
