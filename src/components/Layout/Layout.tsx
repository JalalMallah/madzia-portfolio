import { useEffect } from 'react';
import { PropsWithChildren } from 'react';
import { Josefin_Sans, Nunito_Sans } from '@next/font/google';
import classNames from 'classnames';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import styles from './layout.module.scss';

export const josefin = Josefin_Sans();

export const nunito = Nunito_Sans({
  weight: '400',
});

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
    <div className={classNames(styles.layout, nunito.className)}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
