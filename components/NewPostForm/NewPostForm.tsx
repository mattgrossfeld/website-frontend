import React, { useState } from 'react';
import { Box, Button, Card, Group, Select, Textarea, TextInput } from '@mantine/core';

const communities = [
  { value: 'community1', label: 'Community 1' },
  { value: 'community2', label: 'Community 2' },
  { value: 'community3', label: 'Community 3' },
];

export function NewPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [community, setCommunity] = useState('');
  const [titleError, setTitleError] = useState('');
  const [bodyError, setBodyError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let hasError = false;

    if (title.length > 60) {
      setTitleError('Title must be at most 60 characters');
      hasError = true;
    } else {
      setTitleError('');
    }

    if (body.length > 500) {
      setBodyError('Body must be at most 500 characters');
      hasError = true;
    } else {
      setBodyError('');
    }

    if (!hasError) {
      // Handle form submission logic here
      console.log('Form submitted:', { title, body, community });
    }
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Box style={{ maxWidth: 500 }} mx="auto">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Post Title"
            placeholder="Enter post title"
            value={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
            error={titleError}
            maxLength={60}
            required
          />
          <Textarea
            label="Post Body"
            placeholder="Enter post body"
            value={body}
            onChange={(event) => setBody(event.currentTarget.value)}
            error={bodyError}
            maxLength={500}
            required
            mt="md"
          />
          <Select
            label="Community"
            placeholder="Select a community"
            data={communities}
            value={community}
            onChange={(value) => setCommunity(value || '')}
            required
            mt="md"
          />
          <Group align="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Card>
  );
}
