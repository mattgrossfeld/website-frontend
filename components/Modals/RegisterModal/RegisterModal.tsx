import { useState } from 'react';
import { Button, Group, Modal, PasswordInput, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

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
      roleId: 2,
      email,
      dateOfBirth,
      password,
      createdBy: 'FRONTEND-SYSTEM',
      modifiedBy: 'FRONTEND-SYSTEM'
    };
    console.log('User:', user);

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
      <Group justify="space-between" mt="sm">
        <TextInput
          label="First Name"
          placeholder="John"
          required
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
        />
        <TextInput
          label="Last Name"
          placeholder="Doe"
          required
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
        />
      </Group>
      <Group justify="space-between" mt="sm">
        <TextInput
          label="Username"
          placeholder="john_doe123"
          required
          value={userName}
          onChange={(event) => setUserName(event.currentTarget.value)}
        />
        <TextInput
          label="Display Name"
          placeholder="JohnDoe"
          required
          value={displayName}
          onChange={(event) => setDisplayName(event.currentTarget.value)}
        />
      </Group>
      <TextInput
        mt="lg"
        label="Email/Username"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <DatePickerInput
        mt="md"
        label="Date of Birth"
        placeholder="MM/DD/YYYY"
        required
        value={dateOfBirth}
        onChange={setDateOfBirth}
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        required
        mt="md"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
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
    </Modal>
  );
}
