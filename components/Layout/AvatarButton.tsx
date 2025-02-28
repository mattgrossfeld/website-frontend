import { forwardRef } from 'react';
import { Group, Avatar, Menu, UnstyledButton } from '@mantine/core';
import classes from './Layout.module.css';


export const AvatarButton = forwardRef<HTMLButtonElement>(
  () => (
    <UnstyledButton>
      <Group>
        <Avatar className={classes.avatar} size="lg" radius="xl" />
      </Group>
    </UnstyledButton>
  )
);

export function AvatarMenu() {
  return (
    <Menu>
      <Menu.Target>
        <AvatarButton/>
      </Menu.Target>
      <Menu.Item>Login</Menu.Item>
      <Menu.Item>Register</Menu.Item>
    </Menu>
  );
}