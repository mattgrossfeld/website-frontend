import React from 'react';
import { useRouter } from 'next/router';
import { Button, Group, Box } from '@mantine/core';
import { CommunityCard } from '@/components/CommunityCard/CommunityCard';

const communityData = [
  {
    name: 'Default',
    description: 'The default community for all users.',
    lastPost: {
      title: 'Post 1',
      body: 'This is the first post.',
      createdBy: 'Jane',
      createdTm: '2025-02-03T12:00:00Z',
    },
    createdBy: 'Jane',
    createdTm: '2025-02-03T12:00:00Z',
  },
  {
    name: 'SecondCommunity',
    description: 'The second community for all users.',
    lastPost: {
      title: 'Post 3',
      body: 'This is the third post.',
      createdBy: 'Olive',
      createdTm: '2025-02-02T12:00:00Z',
    },
    createdBy: 'Olive',
    createdTm: '2025-02-02T12:00:00Z',
  },
  {
    name: 'ThirdCommunity',
    description: 'The third community for all users.',
    lastPost: {
      title: 'Post 5',
      body: 'This is the fifth post.',
      createdBy: 'Matthew',
      createdTm: '2025-02-04T12:00:00Z',
    },
    createdBy: 'Matthew',
    createdTm: '2025-02-04T12:00:00Z',
  },
];

const Communities = () => {
  const router = useRouter();

  const handleCardClick = (communityName: string, description: string) => {
    router.push({
      pathname: `/communities/${communityName}`,
      query: { description },
    });
  };

  const handleCreateCommunity = () => {
    // Navigate to the create community page or open a modal
    router.push({
      pathname: '/create-community'
    });
  };

  return (
    <Box /*style={{ maxWidth: '800px', margin: '0 auto' }}*/>
      <Group align="left" mb="lg" mt="sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Button color="green" onClick={handleCreateCommunity}>
          Create Community
        </Button>
      </Group>
      {communityData.map((community, index) => (
        <CommunityCard
          key={index}
          name={community.name}
          description={community.description}
          createdBy={community.createdBy}
          createdTm={community.createdTm}
          onClick={() => handleCardClick(community.name, community.description)}
        />
      ))}
    </Box>
  );
};

export default Communities;
