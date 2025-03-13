import React, { useState } from 'react';
import { Box, Button, Card, Group, Textarea, TextInput } from '@mantine/core';

export function NewCommunityForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [nameError, setNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let hasError = false;

    if (name.length > 60) {
      setNameError('Name must be at most 60 characters');
      hasError = true;
    } else {
      setNameError('');
    }

    if (description.length > 500) {
      setDescriptionError('Description must be at most 500 characters');
      hasError = true;
    } else {
      setDescriptionError('');
    }

    if (!hasError) {
      // Handle form submission logic here
      console.log('Form submitted:', { name, description });
    }
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Box style={{ maxWidth: 500 }} mx="auto">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            error={nameError}
            maxLength={60}
            required
          />
          <Textarea
            label="Description"
            placeholder="Enter description"
            value={description}
            onChange={(event) => setDescription(event.currentTarget.value)}
            error={descriptionError}
            maxLength={500}
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
