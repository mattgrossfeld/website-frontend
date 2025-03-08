import React, { useState } from 'react';
import { Box, Button, Group, Paper, Text, TextInput } from '@mantine/core';
import styles from './Shoutbox.module.css';

interface Shout {
  message: string;
  createdBy: string;
  createdTm: string;
}

const initialShoutData: Shout[] = [
  { message: 'Hello World!', createdBy: 'Jane', createdTm: '2025-02-01T12:00:00Z' },
  { message: 'This is a shout!', createdBy: 'John', createdTm: '2025-02-02T14:00:00Z' },
];

export function Shoutbox() {
  const [shoutData, setShoutData] = useState<Shout[]>(initialShoutData);
  const [message, setMessage] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newShout: Shout = {
      message,
      createdBy,
      createdTm: new Date().toISOString(),
    };
    setShoutData([newShout, ...shoutData]);
    setMessage('');
    setCreatedBy('');
  };

  return (
    <Paper withBorder radius="md" className={styles.shoutbox}>
      <Text size="lg" fw={500} mb="md">
        Shouts
      </Text>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Message"
          placeholder="Enter your shout"
          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
          required
        />
        <TextInput
          label="Name"
          placeholder="Enter your name"
          value={createdBy}
          onChange={(event) => setCreatedBy(event.currentTarget.value)}
          required
          mt="sm"
        />
        <Group align="right" mt="md">
          <Button color="green.9" type="submit">Submit</Button>
        </Group>
      </form>
      <Box mt="lg">
        {shoutData.map((shout, index) => (
          <Box key={index} mb="sm">
            <Text size="sm" fw={500}>
              {shout.createdBy}
            </Text>
            <Text size="xs" c="dimmed">
              {new Date(shout.createdTm).toLocaleString()}
            </Text>
            <Text size="sm">{shout.message}</Text>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
