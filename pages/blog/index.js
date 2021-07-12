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
            content='This is a blog made using nextjs. Home page containing all the articles!'
          ></meta>
          <meta property='og:title' content='Rahsand | Blog' key='ogtitle' />+{' '}
          <meta
            property='og:description'
            content='This is a blog made using nextjs. Home page containing all the articles!'
            key='ogdesc'
          />
          <meta
            name='description'
            content='This is a blog made using nextjs. Home page containing all the articles!'
          />
          <link rel='icon' href='/favicon.ico' />
          {/* Twitter */}
          <meta name='twitter:card' content='summary' key='twcard' />
          <meta
            name='twitter:creator'
            content='https://twitter.com/holdmypotionn'
            key='twhandle'
          />
        </Head>
        <MainContent blogs={blogs} />
      </Layout>
    </Context>
  );
}
