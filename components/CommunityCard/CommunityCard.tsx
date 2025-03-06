import { Group, Paper, Text } from '@mantine/core';
import classes from './CommunityCard.module.css';

interface CommunityCardProps {
  name: string;
  description: string;
  createdBy: string;
  createdTm: string;
  onClick?: () => void;
}

export function CommunityCard({ name, description, createdBy, createdTm, onClick }: CommunityCardProps) {
  return (
    <Paper withBorder radius="md" className={classes.card} onClick={onClick} style={{ cursor: 'pointer' }}>
      <Group justify="space-between">
        <Text size="xl" fw={500}>
          {name}
        </Text>
      </Group>
      <Text size="sm" mt="sm" c="dimmed">
        {description}
      </Text>
      <Group mt="md" justify="space-between">
        <div />
        <Text size="xs" c="dimmed">
          Created by {createdBy} on {createdTm}
        </Text>
      </Group>
    </Paper>
  );
}
