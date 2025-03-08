import { Group, Paper, Text, Button } from '@mantine/core';
import classes from './CommunityCard.module.css';

interface CommunityCardProps {
  name: string;
  description: string;
  createdBy: string;
  createdTm: string;
  onClick?: () => void;
}

export function CommunityCard({ name, description, createdBy, createdTm, onClick }: CommunityCardProps) {
  const handleJoinCommunity = () => {
    // Handle join community logic here
    console.log('Joined community:', name);
  };

  return (
    <Paper withBorder radius="md" className={classes.card} onClick={onClick} style={{ cursor: 'pointer', position: 'relative' }}>
      <Button
        color="green"
        size="xs"
        mt="sm"
        mr="sm"
        ml="auto"
        className={classes.joinButton}
        onClick={(e) => {
          e.stopPropagation();
          handleJoinCommunity();
        }}
      >
        Join Community
      </Button>
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
