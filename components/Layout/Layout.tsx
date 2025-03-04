import React from "react";
import Header from "./Header";
import { Shoutbox } from "../Shoutbox/Shoutbox";
import classes from "./Layout.module.css";
import { Divider, Title } from "@mantine/core";

interface LayoutProps {
    children: React.ReactNode;
    pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
    return (
        <div className={classes.layoutContainer}>
            <Header />
            <div className={classes.gridContainer}>
                <div className={classes.emptyCell} />
                <div className={classes.titleCell}>
                    <Title order={3} className={classes.title}>{pageTitle}</Title>
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