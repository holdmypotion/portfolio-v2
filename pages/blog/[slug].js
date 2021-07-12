import { createClient } from 'contentful';
import Layout from '../../components/blog/layout/layout';
import Head from 'next/head';
import MainContent from '../../components/blog/mainContent/mainContent';
import Context from '../../store';

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
  if (!article) return <div>loading</div>;
  const title = `Rahsand | Blog - ${article.fields.title}`;
  return (
    <Context>
      <Layout>
        <Head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <meta
            name='description'
            content='This is a blog made using nextjs. Article page containing details of the article!'
          ></meta>
          <meta property='og:title' content={title} key='ogtitle' />+{' '}
          <meta
            property='og:description'
            content='This is a blog made using nextjs. Article page containing details of the article!'
            key='ogdesc'
          />
          <meta
            name='description'
            content='This is a blog made using nextjs. Article page containing details of the article!'
          />
          {/* Twitter */}
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta
            name='twitter:creator'
            content='https://twitter.com/holdmypotionn'
            key='twhandle'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <MainContent article={article} />
      </Layout>
    </Context>
  );
}
