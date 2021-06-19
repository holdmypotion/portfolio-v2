import { createClient } from 'contentful';
import Layout from '../../components/blog/layout/layout';
import Head from 'next/head';
import MainContent from '../../components/blog/mainContent/mainContent';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blog',
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
    content_type: 'blog',
    'fields.slug': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/blog',
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
  return (
    <Layout>
      <Head>
        <title>Rahsand- Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainContent article={article} />
    </Layout>
  );
}
