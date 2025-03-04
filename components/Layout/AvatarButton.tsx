import { Group, Avatar, Menu, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './Layout.module.css';



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