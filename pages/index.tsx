import { AppShell } from '@mantine/core';
import { Header } from '../components/Layout/Header';

export default function HomePage() {

  return (
    <AppShell padding="xl">
      <Header/>
      
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
};