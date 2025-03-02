import { Paper, Text, Group, Badge } from '@mantine/core';
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
        <Badge autoContrast color="green.5">{community}</Badge>
      </Group>
      <Text size="sm" mt="sm" c="dimmed">
        {body}
      </Text>
      <Group mt="md" justify='space-between'>
        <Text size="xs" c="dimmed">
          Created by {createdBy}
        </Text>
        <Text size="xs" c="dimmed">
          {createdTm}
        </Text>
      </Group>
    </Paper>
  );
}