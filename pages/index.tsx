import { AppShell } from '@mantine/core';
import { Header } from '../components/Layout/Header';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';
import Post from './post';
import Communities from './communities';

export default function HomePage() {

  return (
    <Router>
    <AppShell padding="xl">
      <Header/>
      <AppShell.Main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/communities" element={<Communities />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
    </Router>
  );
};
