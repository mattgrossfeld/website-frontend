import { Badge, Group, Paper, Text } from '@mantine/core';
import classes from './PostCard.module.css';

interface PostCardProps {
  title: string;
  body: string;
  community: string;
  createdTm: string;
  createdBy: string;
}

export function PostCard({ title, body, community, createdTm, createdBy }: PostCardProps) {
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <Group justify="space-between">
        <Text size="xl" fw={500}>
          {title}
        </Text>
        <Badge autoContrast color="green.5">
          {community}
        </Badge>
      </Group>
      <Text size="sm" mt="sm" c="dimmed">
        {body}
      </Text>
      <Group mt="md" justify="space-between">
        <div /> {/* Empty div to push the text to the right */}
        <Text size="xs" c="dimmed" style={{ textAlign: 'right' }}>
          Created by {createdBy} on {createdTm}
        </Text>
      </Group>
    </Paper>
  );
}
