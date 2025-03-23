import { useState } from 'react';
import Link from 'next/link';
import { IconHome, IconUsersGroup } from '@tabler/icons-react';
import { Group, MantineProvider } from '@mantine/core';
import LoginModal from '../Modals/LoginModal/LoginModal';
import RegisterModal from '../Modals/RegisterModal/RegisterModal';
import { AvatarMenu } from './AvatarButton';
import classes from './Layout.module.css';

const data = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/communities', label: 'Communities', icon: IconUsersGroup },
];

export default function Header() {
  const [active, setActive] = useState('Home');
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [registerModalOpened, setRegisterModalOpened] = useState(false);

  const links = data.map((item) => (
    <Link href={item.link} key={item.label}>
      <div
        className={classes.link}
        data-active={item.label === active || undefined}
        onClick={() => {
          setActive(item.label);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setActive(item.label);
          }
        }}
        role="button"
        tabIndex={0}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </div>
    </Link>
  ));

  const openLoginModal = () => setLoginModalOpened(true);
  const closeLoginModal = () => setLoginModalOpened(false);
  const openRegisterModal = () => setRegisterModalOpened(true);
  const closeRegisterModal = () => setRegisterModalOpened(false);

  return (
    <MantineProvider defaultColorScheme="dark">
      <div className={classes.header}>
        <nav className={classes.nav}>
          <div>
            <Group>{links}</Group>
          </div>
        </nav>
        <AvatarMenu onLoginClick={openLoginModal} onRegisterClick={openRegisterModal} />
        <LoginModal opened={loginModalOpened} onClose={closeLoginModal} />
        <RegisterModal opened={registerModalOpened} onClose={closeRegisterModal} />
      </div>
    </MantineProvider>
  );
}
