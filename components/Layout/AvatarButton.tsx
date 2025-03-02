import { forwardRef } from 'react';
import { Group, Avatar, Menu, UnstyledButton } from '@mantine/core';
import classes from './Layout.module.css';
import { Link } from 'react-router-dom';


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
        component={Link}
        to="/login">
          Login
          </Menu.Item>
        <Menu.Item
        component={Link}
        to="/register">Register
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    
  );
}