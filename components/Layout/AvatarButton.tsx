import { forwardRef } from 'react';
import { Group, Avatar, Menu, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Layout.module.css';

interface AvatarButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  onLoginClick: () => void;
}

export const AvatarButton = forwardRef<HTMLButtonElement, AvatarButtonProps>(
  ({ onLoginClick, ...props }, ref) => (
    <UnstyledButton {...props} ref={ref}>
      <Group>
        <Avatar className={classes.avatar} size="lg" radius="xl" />
      </Group>
    </UnstyledButton>
  )
);

export function AvatarMenu({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Avatar className={classes.avatar} size="lg" radius="xl" />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component="button" onClick={onLoginClick}>
          Login
        </Menu.Item>
        <Menu.Item component={Link} to="/register">
          Register
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}