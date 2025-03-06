import React from 'react';
import { Divider, Title } from '@mantine/core';
import { Shoutbox } from '../Shoutbox/Shoutbox';
import Header from './Header';
import classes from './Layout.module.css';

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={classes.layoutContainer}>
      <Header />
      <div className={classes.gridContainer}>
        <div className={classes.emptyCell} />
        <div className={classes.titleCell}>
          <Title order={3} className={classes.title}>
            {pageTitle}
          </Title>
          <Divider className={classes.divider} />
        </div>
        <div className={classes.emptyCell} />
        <div className={classes.emptyCell} />
        <div className={classes.contentCell}>{children}</div>
        <div className={classes.shoutboxCell}>
          <Shoutbox />
        </div>
      </div>
    </div>
  );
};

export default Layout;
