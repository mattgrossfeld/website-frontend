import { Avatar, Group, Menu, UnstyledButton } from '@mantine/core';
import classes from './Layout.module.css';

interface AvatarMenuProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export function AvatarMenu({ onLoginClick, onRegisterClick }: AvatarMenuProps) {
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
        <Menu.Item component="button" onClick={onRegisterClick}>
          Register
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
