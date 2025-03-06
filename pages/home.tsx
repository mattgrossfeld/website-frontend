import React from 'react';
import { PostCard } from '@/components/PostCard/PostCard';

const postData = [
  {
    title: 'Post 1',
    body: 'This is the first post.',
    community: 'Default',
    createdBy: 'Jane',
    createdTm: '2025-02-03T12:00:00Z',
  },
  {
    title: 'Post 2',
    body: 'This is the second post.',
    community: 'SecondCommunity',
    createdBy: 'Matthew',
    createdTm: '2025-02-01T12:00:00Z',
  },
  {
    title: 'Post 3',
    body: 'This is the third post.',
    community: 'SecondCommunity',
    createdBy: 'Olive',
    createdTm: '2025-02-02T12:00:00Z',
  },
  {
    title: 'Post 4',
    body: 'This is the fourth post.',
    community: 'Default',
    createdBy: 'Percy',
    createdTm: '2025-02-02T15:00:00Z',
  },
];

const Home = () => {
  const sortedPostData = postData.sort(
    (a, b) => new Date(b.createdTm).getTime() - new Date(a.createdTm).getTime()
  );
  //Sorted data can be achieved in sql query when i connect to backend.
  return (
    <>
      {sortedPostData.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          body={post.body}
          community={post.community}
          createdTm={new Date(post.createdTm).toLocaleString()}
          createdBy={post.createdBy}
        />
      ))}
    </>
  );
};

export default Home;
