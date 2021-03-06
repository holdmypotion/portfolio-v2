import Head from "next/head";
import { createClient } from "contentful";

import Layout from "../../components/blog/layout/layout";
import MainContent from "../../components/blog/mainContent/mainContent";
import Context from "../../store";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "blog",
    order: "-fields.publishDate",
  });

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1,
  };
}

export default function Blog({ blogs }) {
  return (
    <Context>
      <Layout>
        <Head>
          <title>Rahsand | Blog</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="I develop websites and I develop them good! | Articles on frontend, book notes, UI designs, and much more."
          />
          <meta name="author" content="Rahul Sharma"></meta>
          <meta name="copyright" content="2021 | Rahul Sharma"></meta>
          <meta name="robots" content="index, follow"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://www.rahsand.tech/"></meta>
          <meta property="og:title" content="Rahsand | Blog"></meta>
          <meta
            property="og:description"
            content="I develop websites and I develop them good! | Articles on frontend, book notes, UI designs, and much more."
          />
          <meta property="og:site_name" content="Rahsand | Blog"></meta>
          <meta property="twitter:site" content="@holdmypotionn"></meta>
          <meta property="twitter:title" content="Rahsand | Blog"></meta>
          <meta
            property="twitter:description"
            content="I develop websites and I develop them good! | Articles on frontend, book notes, UI designs, and much more."
          />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="holdmypotionn" key="twhandle" />
          {/* <meta property="og:image" content="Enter url"></meta> */}
          <meta property="forem:domain" content="rahsand.tech"></meta>
          <meta
            name="monetization"
            content="$ilp.uphold.com/m9E8Lgjik82p"
          ></meta>
          <link rel="canonical" href="https://www.rahsand.tech/"></link>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContent blogs={blogs} />
      </Layout>
    </Context>
  );
}
