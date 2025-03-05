import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (router.pathname.startsWith('/communities/')) {
      const communityName = router.query.community;
      setPageTitle(`Community: ${communityName}`);
    } else {
      switch (router.pathname) {
        case '/home':
          setPageTitle('Latest Posts');
          break;
        case '/communities':
          setPageTitle('Latest Communities');
          break;
        case '/profile':
          setPageTitle("Logged In User's Profile");
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
