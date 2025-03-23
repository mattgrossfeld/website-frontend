import { useState, useEffect } from 'react';
import { Button, Group, Modal, PasswordInput, TextInput, Box } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { z } from 'zod';
import { registerSchema } from '@/utils/registerValidation';

import '@mantine/dates/styles.css';

interface RegisterModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function RegisterModal({ opened, onClose }: RegisterModalProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);

  useEffect(() => {
    if (!opened) {
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      setUserName('');
      setDisplayName('');
      setEmail('');
      setDateOfBirth(null);
      setErrors([]);
    }
  }, [opened]);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    const user = {
      firstName,
      lastName,
      userName,
      displayName,
      email,
      password,
      dateOfBirth,
    };

    try {
      registerSchema.parse(user);
      setErrors([]);

      const response = await fetch('https://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Failed to register user');
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
      title="Register"
      centered
      overlayProps={{
        backgroundOpacity: 0.5,
        blur: 4,
      }}
    >
      <Box>
        <Group justify="space-between" mt="sm">
          <TextInput
            label="First Name"
            placeholder="John"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.currentTarget.value)}
            error={errors.find((error) => error.path.includes('firstName'))?.message}
          />
          <TextInput
            label="Last Name"
            placeholder="Doe"
            required
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
            error={errors.find((error) => error.path.includes('lastName'))?.message}
          />
        </Group>
        <Group justify="space-between" mt="sm">
          <TextInput
            label="Username"
            placeholder="john_doe123"
            required
            value={userName}
            onChange={(event) => setUserName(event.currentTarget.value)}
            error={errors.find((error) => error.path.includes('userName'))?.message}
          />
          <TextInput
            label="Display Name"
            placeholder="JohnDoe"
            required
            value={displayName}
            onChange={(event) => setDisplayName(event.currentTarget.value)}
            error={errors.find((error) => error.path.includes('displayName'))?.message}
          />
        </Group>
        <TextInput
          mt="lg"
          label="Email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          error={errors.find((error) => error.path.includes('email'))?.message}
        />
        <DatePickerInput
          mt="md"
          label="Date of Birth"
          placeholder="MM/DD/YYYY"
          required
          value={dateOfBirth}
          onChange={setDateOfBirth}
          error={errors.find((error) => error.path.includes('dateOfBirth'))?.message}
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
        <PasswordInput
          label="Confirm Password"
          placeholder="Your password"
          required
          mt="md"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.currentTarget.value)}
        />
        <Group justify="right" mt="sm">
          <Button onClick={handleRegister}>Register</Button>
        </Group>
      </Box>
    </Modal>
  );
}
