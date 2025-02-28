import { useState } from 'react';
import {
  IconHome,
  IconPencil,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Avatar, Group, MantineProvider } from '@mantine/core';
import classes from './Layout.module.css';

const data = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'Posts', icon: IconPencil },
  { link: '', label: 'Communities', icon: IconUsersGroup },
];

export function Header() {
  const [active, setActive] = useState('Home');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>

    </a>
  ));

  return (
    <MantineProvider forceColorScheme='dark'>
    <div className={classes.header}>
        <nav className={classes.nav}>
            <div>
                <Group>
                {links}
                </Group>
                
            </div>
        </nav>
        <a
        className={classes.avatar}
        >
        <Avatar size="lg" radius="xl"/>
        </a>
    </div>
    </MantineProvider>
  );
}