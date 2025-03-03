import { Modal, Anchor, Checkbox, Group, PasswordInput, TextInput, Button } from '@mantine/core';
import classes from './LoginModal.module.css';
interface LoginModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LoginModal({ opened, onClose }: LoginModalProps) {
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
      <TextInput label="Email" placeholder="you@mantine.dev" required />
      <PasswordInput label="Password" placeholder="Your password" required mt="md" />
      <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group>
      <Group justify="right" mt="sm">
      <Button>Login</Button>
      </Group>
    </Modal>
  );
}