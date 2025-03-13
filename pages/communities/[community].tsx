import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Button, Tabs, Text, Group } from '@mantine/core';
import { PostCard } from '../../components/PostCard/PostCard';
import { ContentTable } from '../../components/ContentTable/ContentTable';
import { RolesTable } from '../../components/RolesTable/RolesTable';
import { IconPlus } from '@tabler/icons-react';

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

const communityData = [
  {
    name: 'Default',
    description: 'The default community for all users.',
  },
  {
    name: 'SecondCommunity',
    description: 'The second community for all users.',
  },
  {
    name: 'ThirdCommunity',
    description: 'The third community for all users.',
  },
];

const roles = [
  {
    roleName: 'Admin',
    roleDescription: 'Administrator with full access',
    roleLevel: 1,
    isAdmin: true,
    roleCreatedTm: '2025-01-01T12:00:00Z',
    roleUpdatedTm: '2025-01-10T12:00:00Z',
    roleCreatedBy: 'System',
    roleModifiedBy: 'John Doe',
  },
  {
    roleName: 'Member',
    roleDescription: 'Regular member with limited access',
    roleLevel: 2,
    isAdmin: false,
    roleCreatedTm: '2025-01-01T12:00:00Z',
    roleUpdatedTm: '2025-01-10T12:00:00Z',
    roleCreatedBy: 'System',
    roleModifiedBy: 'Jane Doe',
  },
  // ...other roles
];

export default function CommunityPage() {
  const router = useRouter();
  const { community } = router.query;
  const [activeTab, setActiveTab] = useState('posts');
  const [isClient, setIsClient] = useState(false);
  const [communityDescription, setCommunityDescription] = useState('');

  useEffect(() => {
    if (community) {
      document.title = community as string;
      const communityInfo = communityData.find((c) => c.name === community);
      if (communityInfo) {
        setCommunityDescription(communityInfo.description);
      }
    }
  }, [community]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleCreatePost = () => {
    router.push('/create-post');
  };

  return (
    <div>
      <Text size="lg" style={{ marginTop: 'var(--mantine-spacing-lg)', textAlign: 'center' }}>
        {communityDescription}
      </Text>
      <Tabs color="green.7" value={activeTab} onChange={(value) => setActiveTab(value || 'posts')}>
        <Group align="right" style={{ width: '100%' }}>
          <Button color="green.9" ml="auto">Join Community</Button>
        </Group>
        <Tabs.List>
          <Tabs.Tab value="posts">Posts</Tabs.Tab>
          <Tabs.Tab value="users">Users</Tabs.Tab>
          <Tabs.Tab value="roles">Roles</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="posts" style={{ marginTop: 'var(--mantine-spacing-lg)' }}>
        <Button
            value="create-post"
            onClick={handleCreatePost}
            style={{
              backgroundColor: 'var(--mantine-color-green-9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 var(--mantine-spacing-sm)',
              marginLeft: 'auto',
            }}
          >
            <IconPlus size={16} style={{ marginRight: 'var(--mantine-spacing-xs)' }} />
            Create Post
          </Button>
          {posts.map((post) => (
            <PostCard createdTm={new Date().toLocaleTimeString()} body={post.content} community={post.communityName} key={post.id} {...post} />
          ))}
        </Tabs.Panel>

        <Tabs.Panel value="users" style={{ marginTop: 'var(--mantine-spacing-lg)' }}>
          <ContentTable data={users} />
        </Tabs.Panel>

        <Tabs.Panel value="roles" style={{ marginTop: 'var(--mantine-spacing-lg)' }}>
          <RolesTable roles={roles} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}