import { AppShell } from '@mantine/core';
import { Header } from '../components/Layout/Header';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home/home';
import Post from './post';
import Communities from './communities';
import Login from './login';
import Register from './register';

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
      <AppShell padding="xl">
        <Header />
        <AppShell.Main>
          <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/post" element={<Post />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </Router>
  );
}