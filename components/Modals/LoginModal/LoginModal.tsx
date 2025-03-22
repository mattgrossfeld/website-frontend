import { useState } from 'react';
import { Anchor, Button, Checkbox, Group, Modal, PasswordInput, TextInput, Text } from '@mantine/core';
import Cookies from 'js-cookie';

interface LoginModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LoginModal({ opened, onClose }: LoginModalProps) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!userName || !password) {
      setError('All fields are required');
      return;
    }

    const user = {
      userName,
      password,
    };
    console.log('User:', user);

    const response = await fetch('https://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
      credentials: 'include', // Include credentials in the request
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      Cookies.set('jwt', token); // Set cookie to expire in 1 day
      console.log('User logged in successfully');
    } else {
      console.error('Failed to log in user');
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Login"
      centered
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 4,
      }}
    >
      {error && <Text c="red">{error}</Text>}
      <TextInput
        label="Username"
        placeholder="yourUserName"
        required
        value={userName}
        onChange={(event) => setUserName(event.currentTarget.value)}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group>
      <Group justify="right" mt="sm">
        <Button onClick={handleLogin}>Login</Button>
      </Group>
    </Modal>
  );
}
