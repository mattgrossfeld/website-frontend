import { AppShell } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Home from './home';
import Communities from './communities';
import Layout from '@/components/Layout/Layout';

const AppRoutes = () => {
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'Latest Posts';
      case '/communities':
        return 'Latest Communities';
      default:
        return 'Your Page Title';
    }
  };

  return (
    <Layout pageTitle={getPageTitle(location.pathname)}>
      <AppShell padding="xl">
        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/communities" element={<Communities />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </Layout>
  );
};

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}