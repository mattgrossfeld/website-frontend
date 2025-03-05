import { useState } from 'react';
import {
  IconHome,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Group, MantineProvider } from '@mantine/core';
import { AvatarMenu } from './AvatarButton';
import classes from './Layout.module.css';
import { Link } from 'react-router-dom';
import LoginModal from '../Modals/LoginModal/LoginModal';
import RegisterModal from '../Modals/RegisterModal/RegisterModal';

const data = [
  { link: '/', label: 'Home', icon: IconHome },
  { link: '/communities', label: 'Communities', icon: IconUsersGroup }
];

export default function Header() {
  const [active, setActive] = useState('Home');
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [registerModalOpened, setRegisterModalOpened] = useState(false);

  
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
  const openRegisterModal = () => setRegisterModalOpened(true);
  const closeRegisterModal = () => setRegisterModalOpened(false);

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
        <AvatarMenu onLoginClick={openLoginModal} onRegisterClick={openRegisterModal} />
        <LoginModal opened={loginModalOpened} onClose={closeLoginModal} />
        <RegisterModal opened={registerModalOpened} onClose={closeRegisterModal} />


    </div>
    </MantineProvider>
  );
}