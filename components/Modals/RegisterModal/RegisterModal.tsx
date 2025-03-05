import { Modal, Group, PasswordInput, TextInput, Button } from '@mantine/core';
interface RegisterModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function RegisterModal({ opened, onClose }: RegisterModalProps) {
  return (
    <Modal 
        opened={opened} 
        onClose={onClose} 
        title="Login" 
        centered
        overlayProps={{
            backgroundOpacity: 0.5,
            blur: 4
    }}>
    <Group justify="space-between" mt="lg">
        <TextInput label="First Name" placeholder="John" required />
        <TextInput label="Last Name" placeholder="Doe" required />
    </Group>
    <Group justify="space-between" mt="lg">
        <TextInput label="Username" placeholder="john_doe123" required />
        <TextInput label="Display Name" placeholder="JohnDoe" required />
    </Group>
    
      <TextInput label="Email/Username" placeholder="you@mantine.dev" required />
      <PasswordInput label="Password" placeholder="Your password" required mt="md" />
      <PasswordInput label="Confirm Password" placeholder="Your password" required mt="md" />
      
      <Group justify="right" mt="sm">
      <Button>Register</Button>
      </Group>
    </Modal>
  );
}