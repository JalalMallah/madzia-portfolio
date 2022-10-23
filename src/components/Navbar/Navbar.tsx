import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import routes from '../../constants/routes';

import styles from './navbar.module.scss';
import logo from '../../../public/logo.png';

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const isHomeRoute = pathname === routes.HOME;
  const isAboutRoute = pathname === routes.ABOUT;
  const isPortfolioRoute = pathname === routes.PORTFOLIO;
  const isContactRoute = pathname === routes.CONTACT;

  return (
    <nav className={styles.navbar}>
      <Image
        src={logo}
        alt='Logo'
        width={120}
        height={100}
        onClick={() => router.push(routes.HOME)}
        className={styles.logo}
      />
      <div className={styles.content}>
        <ul className={styles.menu}>
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
            href='https://www.facebook.com/MagdalenaSobkiewiczPhoto/'
            target='_blank'
            rel='noreferrer'
            className={styles.soMeIcon}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href='https://www.instagram.com/m_sobkiewicz_fotografia/'
            target='_blank'
            rel='noreferrer'
            className={styles.soMeIcon}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
