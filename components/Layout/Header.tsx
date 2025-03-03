import { useState } from 'react';
import {
  IconHome,
  IconPencil,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Group, MantineProvider } from '@mantine/core';
import { AvatarMenu } from './AvatarButton';
import classes from './Layout.module.css';
import { Link } from 'react-router-dom';
import LoginModal from '../Modals/LoginModal/LoginModal';

const data = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/communities', label: 'Communities', icon: IconUsersGroup },
  { link: '/post', label: 'Create Post', icon: IconPencil },

];

export function Header() {
  const [active, setActive] = useState('Home');
  const [loginModalOpened, setLoginModalOpened] = useState(false);

  
  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>

    </Link>
  ));

  const openLoginModal = () => setLoginModalOpened(true);
  const closeLoginModal = () => setLoginModalOpened(false);
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
        <AvatarMenu onLoginClick={openLoginModal} />
        <LoginModal opened={loginModalOpened} onClose={closeLoginModal} />

    </div>
    </MantineProvider>
  );
}