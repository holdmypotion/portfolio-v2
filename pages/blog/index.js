import Head from 'next/head';
import { createClient } from 'contentful';

import Layout from '../../components/blog/layout/layout';
import MainContent from '../../components/blog/mainContent/mainContent';
import Context from '../../store';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'blog' });

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
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <meta
            name='description'
            content='I develop websites and I develop them good! | Blog on frontend, book notes, UI designs, and much more.'
          />
          <meta name='author' content='Rahul Sharma'></meta>
          <meta
            name='description'
            content='I develop websites and I develop them good! | Blog on frontend, book notes, UI designs, and much more.'
          />
          <link rel='icon' href='/favicon.ico' />
          {/* Twitter */}
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta
            name='twitter:creator'
            content='https://twitter.com/holdmypotionn'
            key='twhandle'
          />
          <meta name='copyright' content='2021 | Rahul Sharma'></meta>
          <meta name='robots' content='index, follow'></meta>
        </Head>
        <MainContent blogs={blogs} />
      </Layout>
    </Context>
  );
}
