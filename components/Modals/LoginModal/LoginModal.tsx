import { useState, useEffect } from 'react';
import { Anchor, Button, Checkbox, Group, Modal, PasswordInput, TextInput, Text } from '@mantine/core';
import Cookies from 'js-cookie';
import { z } from 'zod';
import { loginSchema } from '@/utils/loginValidation';

interface LoginModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function LoginModal({ opened, onClose }: LoginModalProps) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);

  useEffect(() => {
    if (!opened) {
      setUserName('');
      setPassword('');
      setErrors([]);
    }
  }, [opened]);

  const handleLogin = async () => {
    const user = {
      userName,
      password,
    };
    console.log('User:', user);

    try {
      loginSchema.parse(user);
      setErrors([]);

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
        onClose(); // Close the modal upon successful login
      } else {
        console.error('Failed to log in user');
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setErrors(e.issues);
      }
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
      {errors.length > 0 && <Text c="red">{errors[0].message}</Text>}
      <TextInput
        label="Username"
        placeholder="yourUserName"
        required
        value={userName}
        onChange={(event) => setUserName(event.currentTarget.value)}
        error={errors.find((error) => error.path.includes('userName'))?.message}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
        error={errors.find((error) => error.path.includes('password'))?.message}
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
