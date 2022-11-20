import { useEffect } from 'react';
import { PropsWithChildren } from 'react';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import styles from './layout.module.scss';

const Layout = ({ children }: PropsWithChildren) => {
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setVh();

    window.addEventListener('resize', setVh);

    return () => {
      window.removeEventListener('resize', setVh);
    };
  }, []);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
