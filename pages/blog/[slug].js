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
            content='I develop websites and I develop them good! | Blog on frontend, book notes, UI designs, and much more.'
          ></meta>
          <meta
            name='description'
            content='I develop websites and I develop them good! | Blog on frontend, book notes, UI designs, and much more.'
          />
          {/* Twitter */}
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta
            name='twitter:creator'
            content='https://twitter.com/holdmypotionn'
            key='twhandle'
          />
          <meta name='author' content='Rahul Sharma' />
          <meta name='copyright' content='2021 | Rahul Sharma' />
          <meta name='robots' content='index, follow'></meta>
          <link rel='icon' href='/favicon.ico' />

          {/* OG */}
          <meta property='og:type' content='article' />
          <meta property='og:title' content={article.fields.title} />
          <meta
            property='og:url'
            content={`https://rahsand.tech/blog/${article.fields.slug}`}
          />
          <meta
            property='og:image'
            content={article.fields.featuredImage.fields.file.url}
          />
          <meta
            property='og:description'
            content={article.fields.description}
          />
          <meta property='article:author' content='Rahul Sharma' />
          <meta
            property='article:published_time'
            content={article.fields.publishDate}
          ></meta>
          <meta
            property='article:modified_time'
            content={article.fields.publishDate}
          />
          <meta
            property='article:section'
            content={article.fields.tags.join(', ')}
          />
          <meta
            property='article:tag'
            content={article.fields.tags.join(', ')}
          />
        </Head>
        <MainContent article={article} />
      </Layout>
    </Context>
  );
}
