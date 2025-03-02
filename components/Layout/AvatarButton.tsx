import { forwardRef } from 'react';
import { Group, Avatar, Menu, UnstyledButton } from '@mantine/core';
import classes from './Layout.module.css';


export const AvatarButton = forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<'button'>>(
  (props, ref) => (
    <UnstyledButton {...props} ref={ref}>
      <Group>
        <Avatar className={classes.avatar} size="lg" radius="xl" />
      </Group>
    </UnstyledButton>
  )
);

export function AvatarMenu() {
  return (
    <Menu  shadow="md" width={200}>
      <Menu.Target>
        <AvatarButton/>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item 
        component="a"
        href="/login">
          Login
          </Menu.Item>
        <Menu.Item
        component="a"
        href="/register">Register
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    
  );
}