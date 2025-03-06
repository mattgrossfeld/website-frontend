import React from 'react';
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
  return (
    <div>
      {communityData.map((community, index) => (
        <CommunityCard
          key={index}
          name={community.name}
          description={community.description}
          createdBy={community.createdBy}
          createdTm={community.createdTm}
        />
      ))}
    </div>
  );
};

export default Communities;
