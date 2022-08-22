import React from 'react';
import { PropsWithChildren } from 'react';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import styles from './layout.module.scss';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
