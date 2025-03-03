import { Group, Menu, UnstyledButton, Burger } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import classes from './Layout.module.css';


export function AvatarMenu({ onLoginClick }: { onLoginClick: () => void }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton>
          <Group>
            <Burger className={classes.avatar} opened={opened} onClick={toggle} size="lg" aria-label="Toggle Additional Options"  />
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