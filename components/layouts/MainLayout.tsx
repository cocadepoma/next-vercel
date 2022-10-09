import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";

import styles from "./MainLayout.module.css";

interface LayoutProps extends PropsWithChildren<{}> {
    title?: string;
}

export const MainLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Paco</title>
                <meta name='description' content='Home Page' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />

            <main className={styles.main}>{children}</main>
        </div>
    );
};
