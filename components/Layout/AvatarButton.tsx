import { useState } from 'react';
import { Avatar, Group, Menu, UnstyledButton, Divider } from '@mantine/core';
import Link from 'next/link';
import { checkCookie } from '@/utils/cookieChecker';
import classes from './Layout.module.css';

interface AvatarMenuProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export function AvatarMenu({ onLoginClick, onRegisterClick }: AvatarMenuProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const handleCheckCookie = () => {
    const tokenExists = checkCookie();
    setIsLoggedIn(tokenExists);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('https://localhost:3000/users/logout', {
        method: 'POST',
        credentials: 'include', // Include credentials in the request
      });

      if (response.ok) {
        setIsLoggedIn(null);
        console.log('User logged out successfully');
      } else {
        console.error('Failed to log out user');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Menu shadow="md" width={200} onOpen={handleCheckCookie}>
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Avatar className={classes.avatar} size="lg" radius="xl" />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        {isLoggedIn ? (
          <>
            <Menu.Item component={Link} href={`/users/${isLoggedIn}`}>
              Profile
            </Menu.Item>
            <Menu.Item component={Link} href="/settings">
              Settings
            </Menu.Item>
            <Divider />
            <Menu.Item onClick={handleLogout}>
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item component="button" onClick={onLoginClick}>
              Login
            </Menu.Item>
            <Menu.Item component="button" onClick={onRegisterClick}>
              Register
            </Menu.Item>
          </>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
