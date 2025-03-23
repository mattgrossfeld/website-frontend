import { useState } from 'react';
import { Avatar, Box, Button, Card, Container, Group, Tabs, Text, Textarea } from '@mantine/core';
import { CommunityCard } from '@/components/CommunityCard/CommunityCard';
import { PostCard } from '@/components/PostCard/PostCard';

const user = {
  displayName: 'John Doe',
  aboutMe: 'This is a brief description about John Doe.',
  profilePicture: '/path/to/profile-picture.jpg',
  posts: [
    {
      id: 1,
      title: 'Post 1',
      body: 'This is the first post.',
      community: 'Default',
      createdBy: 'John Doe',
      createdTm: '2025-02-03T12:00:00Z',
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'This is the second post.',
      community: 'SecondCommunity',
      createdBy: 'John Doe',
      createdTm: '2025-02-01T12:00:00Z',
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'This is the third post.',
      community: 'SecondCommunity',
      createdBy: 'John Doe',
      createdTm: '2025-02-02T12:00:00Z',
    },
    {
      id: 4,
      title: 'Post 4',
      body: 'This is the fourth post.',
      community: 'Default',
      createdBy: 'John Doe',
      createdTm: '2025-02-02T15:00:00Z',
    },
    // ...other posts
  ],
  communities: [
    {
      id: 1,
      name: 'Community 1',
      description: 'Description of Community 1',
      createdBy: 'John Doe',
      createdTm: '2025-02-03T12:00:00Z',
    },
    {
      id: 2,
      name: 'Community 2',
      description: 'Description of Community 2',
      createdBy: 'John Doe',
      createdTm: '2025-02-03T12:00:00Z',
    },
    // ...other communities
  ],
};

const dummyComments = [
  {
    id: 1,
    author: 'Matthew',
    content: 'This is a dummy comment from Matthew.',
    createdTm: '2025-02-04T12:00:00Z',
  },
];

export default function ProfilePage() {
  const [comment, setComment] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleCommentSubmit = () => {
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);
  };

  const handleGetUsers = async () => {
    try {
      const response = await fetch('https://localhost:3000/users/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include credentials in the request
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(JSON.stringify(data, null, 2));
      } else {
        setResponseMessage('Failed to fetch users');
      }
    } catch (error) {
      setResponseMessage('An error occurred');
    }
  };

  return (
    <Box
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'var(--mantine-spacing-md)',
      }}
    >
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group align="center">
          <Avatar src={user.profilePicture} size="xl" radius="xl" />
          <Box ml="md">
            <Text size="xl" fw={500} mb="md">
              {user.displayName}
            </Text>
            <Text size="sm" c="dimmed">
              {user.aboutMe}
            </Text>
          </Box>
        </Group>
      </Card>

      <Tabs mt="md" color="green.9">
        <Tabs.List>
          <Tabs.Tab value="recent-posts">Recent Posts</Tabs.Tab>
          <Tabs.Tab value="communities">Communities</Tabs.Tab>
          <Tabs.Tab value="add-comment">Add Comment</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="recent-posts" mt="md">
          {user.posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              community={post.community}
              createdTm={new Date(post.createdTm).toLocaleString()}
              createdBy={post.createdBy}
              id={post.id}
            />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="communities" mt="md">
          {user.communities.map((community) => (
            <CommunityCard
              key={community.id}
              name={community.name}
              description={community.description}
              createdBy={community.createdBy}
              createdTm={community.createdTm}
            />
          ))}
        </Tabs.Panel>
        <Tabs.Panel value="add-comment">
          <Box mt="md">
            {dummyComments.map((comment) => (
              <Card key={comment.id} shadow="sm" padding="lg" radius="md" withBorder mb="md">
                <Text size="sm" fw={500}>
                  {comment.author}
                </Text>
                <Text size="sm" c="dimmed" mt="xs">
                  {comment.content}
                </Text>
                <Text size="xs" c="dimmed" mt="xs">
                  {new Date(comment.createdTm).toLocaleString()}
                </Text>
              </Card>
            ))}
          </Box>
          <Textarea
            placeholder="Add a comment"
            value={comment}
            onChange={(event) => setComment(event.currentTarget.value)}
            mt="md"
          />
          <Group align="right" mt="md">
            <Button onClick={handleCommentSubmit}>Submit</Button>
          </Group>
        </Tabs.Panel>
      </Tabs>

      <Container>
        <Group align="center" mt="xl">
          <Button onClick={handleGetUsers}>Get Users</Button>
        </Group>
        {responseMessage && (
          <Text mt="md" style={{ whiteSpace: 'pre-wrap' }}>
            {responseMessage}
          </Text>
        )}
      </Container>
    </Box>
  );
}
