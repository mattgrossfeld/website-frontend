import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Tabs } from '@mantine/core';
import { PostCard } from '../../components/PostCard/PostCard';
import { ContentTable } from '../../components/ContentTable/ContentTable';

// Mock data for posts and users
const posts = [
  // Example posts data
  {
    id: 1,
    title: 'Post 1',
    content: 'Content of post 1',
    createdBy: 'User1',
    communityId: 1,
    communityName: 'Community 1',
    parent_post_id: null
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content of post 2',
    createdBy: 'User2',
    communityId: 1,
    communityName: 'Community 1',
    parent_post_id: 1
  },
  {
    id: 3,
    title: 'Post 3',
    content: 'Content of post 3',
    createdBy: 'User3',
    communityId: 1,
    communityName: 'Community 1',
    parent_post_id: 1
  },
  {
    id: 4,
    title: 'Post 4',
    content: 'Content of post 4',
    createdBy: 'User4',
    communityId: 1,
    communityName: 'Community 1',
    parent_post_id: 1
  }
];

const users = [
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png',
    name: 'SomeDerpyNoob',
    role: 'Admin',
    lastActive: '2 days ago',
    dateJoined: '2021-01-01',
    active: true,
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png',
    name: 'PlanetJanet',
    role: 'Member',
    lastActive: '6 days ago',
    dateJoined: '2023-01-01',
    active: true,
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'NattyMatty',
    role: 'Admin',
    lastActive: '2 days ago',
    dateJoined: '2024-01-01',
    active: false,
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'TestUser',
    role: 'Member',
    lastActive: '5 days ago',
    dateJoined: '2021-01-01',
    active: true,
  },
  {
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Jeremy Footviewer',
    role: 'Admin',
    lastActive: '3 days ago',
    dateJoined: '2022-01-01',
    active: false,
  },
];

export default function CommunityPage() {
  const router = useRouter();
  const { community } = router.query;
  const [activeTab, setActiveTab] = useState('posts');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (community) {
      document.title = community as string;
    }
  }, [community]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Tabs color="green.7" value={activeTab} onChange={(value) => setActiveTab(value || 'posts')}>
        <Tabs.List>
          <Tabs.Tab value="posts">Posts</Tabs.Tab>
          <Tabs.Tab value="users">Users</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="posts" style={{ marginTop: 'var(--mantine-spacing-lg)' }}>
          {posts.map((post) => (
            <PostCard createdTm={new Date().toLocaleTimeString()} body={post.content} community={post.communityName} key={post.id} {...post} />
          ))}
        </Tabs.Panel>

        <Tabs.Panel value="users" style={{ marginTop: 'var(--mantine-spacing-lg)' }}>
          <ContentTable data={users} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}