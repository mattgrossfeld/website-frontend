import '@mantine/core/styles.css';

import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MantineProvider } from '@mantine/core';
import Layout from '@/components/Layout/Layout';
import { theme } from '../theme';

// Mock data for posts
export const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Content of post 1',
    createdBy: 'User1',
    communityId: 1,
    communityName: 'Community 1',
    createdTm: '2023-01-01T12:00:00Z',
    parent_post_id: null,
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content of post 2',
    createdBy: 'User2',
    communityId: 1,
    communityName: 'Community 1',
    createdTm: '2023-01-02T12:00:00Z',
    parent_post_id: 1,
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Content of post 3',
    createdBy: 'User3',
    communityId: 1,
    communityName: 'Community 1',
    createdTm: '2023-01-03T12:00:00Z',
    parent_post_id: 1,
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Content of post 4',
    createdBy: 'User4',
    communityId: 1,
    communityName: 'Community 1',
    createdTm: '2023-01-04T12:00:00Z',
    parent_post_id: 1,
  },
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (router.pathname.startsWith('/communities/')) {
      const communityName = router.query.community;
      setPageTitle(`${communityName}`);
    } else if (router.pathname.startsWith('/posts/')) {
      const postName = router.query.postName;
      const decodedTitle = decodeURIComponent(postName as string).replace(/-/g, ' ');
      const topPost = posts.find(
        (post) =>
          post.title.toLowerCase() === decodedTitle.toLowerCase() && post.parent_post_id === null
      );
      if (topPost) {
        setPageTitle(topPost.title);
      } else {
        setPageTitle(posts[0].title);
      }
    } else if (router.pathname.startsWith('/users/')) {
      const username = router.query.username;
      setPageTitle(`User: ${username}`);
    } else {
      switch (router.pathname) {
        case '/':
          setPageTitle('Latest Posts');
          break;
        case '/communities':
          setPageTitle('Latest Communities');
          break;
        case '/profile':
          setPageTitle("Logged In User's Profile");
          break;
        case '/create-post':
          setPageTitle('Create a New Post');
          break;
        default:
          setPageTitle('');
      }
    }
  }, [router.pathname, router.query]);

  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Matthew's Web Forum</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Layout pageTitle={pageTitle}>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
