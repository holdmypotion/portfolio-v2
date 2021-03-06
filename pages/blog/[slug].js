import { createClient } from "contentful";
import Layout from "../../components/blog/layout/layout";
import Head from "next/head";
import MainContent from "../../components/blog/mainContent/mainContent";
import Context from "../../store";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
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
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: { article: items[0] },
    revalidate: 1,
  };
};

export default function Article({ article }) {
  if (!article) return <div>loading</div>;
  console.log(article);
  const title = `Rahsand | Blog - ${article.fields.title}`;
  const imageString = article.fields.featuredImage.fields.file.url.replace(
    /["/"]/g,
    "%2F"
  );
  const imageURL = `https://www.rahsand.tech/_next/image?url=https%3A${imageString}&w=828&q=75`;

  return (
    <Context>
      <Layout>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="I develop websites and I develop them good! | Articles on frontend, book notes, UI designs, and much more."
          />
          <meta name="author" content="Rahul Sharma" />
          <meta name="copyright" content="2021 | Rahul Sharma" />
          <meta name="robots" content="index, follow"></meta>
          <meta property="og:type" content="article" />
          <meta property="og:title" content={article.fields.title} />
          <meta
            property="og:url"
            content={`https://rahsand.tech/blog/${article.fields.slug}`}
          />
          <meta property="og:image" content={imageURL} />
          <meta
            property="og:description"
            content={article.fields.description}
          />
          <meta property="article:author" content="Rahul Sharma" />
          <meta
            property="article:published_time"
            content={article.fields.publishDate}
          ></meta>
          <meta
            property="article:modified_time"
            content={article.fields.publishDate}
          />
          <meta
            property="article:section"
            content={article.fields.tags.join(", ")}
          />
          <meta
            property="article:tag"
            content={article.fields.tags.join(", ")}
          />
          <meta property="twitter:site" content="@holdmypotionn"></meta>
          <meta property="twitter:title" content="Rahsand | Blog"></meta>
          <meta
            property="twitter:description"
            content="I develop websites and I develop them good! | Articles on frontend, book notes, UI designs, and much more."
          />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta
            name="twitter:creator"
            content="@holdmypotionn"
            key="twhandle"
          />
          {/* <meta property="og:image" content="Enter url"></meta> */}
          <meta
            name="monetization"
            content="$ilp.uphold.com/m9E8Lgjik82p"
          ></meta>
          <meta property="forem:domain" content="rahsand.tech"></meta>
          <link rel="canonical" href="https://www.rahsand.tech/"></link>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainContent article={article} />
      </Layout>
    </Context>
  );
}
