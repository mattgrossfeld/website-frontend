import React from 'react';
import { AppShell } from '@mantine/core';
import Layout from '@/components/Layout/Layout';

const Profile = () => {
  return (
    <Layout pageTitle="Profile">
      <AppShell padding="xl">
        <AppShell.Main>
          <div>
            <h1>Profile</h1>
          </div>
        </AppShell.Main>
      </AppShell>
    </Layout>
  );
};

export default Profile;
