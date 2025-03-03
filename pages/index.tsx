import { AppShell } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Home from './Home/home';
import Communities from './Communities/communities';
import Login from './login';
import Register from './register';
import Layout from '@/components/Layout/Layout';

const AppRoutes = () => {
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'Latest Posts';
      case '/communities':
        return 'Latest Communities';
      case '/login':
        return 'Login';
      case '/register':
        return 'Register';
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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
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