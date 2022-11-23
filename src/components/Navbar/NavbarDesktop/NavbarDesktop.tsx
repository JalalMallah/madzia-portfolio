import Link from 'next/link';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import routes from 'constants/routes';
import { INSTAGRAM_URL, FACEBOOK_URL } from 'constants/URLs';
import { josefin } from 'components/Layout/Layout';

import logo from '../../../../public/logo.png';

import styles from './navbarDesktop.module.scss';

const NavbarDesktop = () => {
  const router = useRouter();
  const { pathname } = router;

  const isHomeRoute = pathname === routes.HOME;
  const isAboutRoute = pathname === routes.ABOUT;
  const isPortfolioRoute = pathname.includes(routes.PORTFOLIO);
  const isContactRoute = pathname === routes.CONTACT;

  return (
    <nav className={styles.container}>
      <Image
        src={logo}
        alt='Logo'
        width={120}
        height={100}
        priority
        onClick={() => router.push(routes.HOME)}
        className={styles.logo}
      />
      <div className={styles.content}>
        <ul className={classNames(styles.menu, josefin.className)}>
          <li
            className={classNames(styles.menuItem, {
              [styles.active]: isHomeRoute,
            })}
          >
            <Link href={routes.HOME}>Główna</Link>
          </li>
          <li
            className={classNames(styles.menuItem, {
              [styles.active]: isAboutRoute,
            })}
          >
            <Link href={routes.ABOUT}>O mnie</Link>
          </li>
          <li
            className={classNames(styles.menuItem, {
              [styles.active]: isPortfolioRoute,
            })}
          >
            <Link href={routes.PORTFOLIO}>Portfolio</Link>
          </li>
          <li
            className={classNames(styles.menuItem, {
              [styles.active]: isContactRoute,
            })}
          >
            <Link href={routes.CONTACT}>Kontakt</Link>
          </li>
        </ul>
        <div className={styles.soMeIcons}>
          <a
            href={FACEBOOK_URL}
            target='_blank'
            rel='noreferrer'
            className={styles.soMeIcon}
          >
            <span
              className={classNames(styles.maskedIcon, styles.facebookIcon)}
            />
          </a>
          <a
            href={INSTAGRAM_URL}
            target='_blank'
            rel='noreferrer'
            className={styles.soMeIcon}
          >
            <span
              className={classNames(styles.maskedIcon, styles.instagramIcon)}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
