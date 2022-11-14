import { useRouter } from 'next/router';
import classNames from 'classnames';
import Link from 'next/link';
import routes from 'constants/routes';

import styles from './sidebar.module.scss';

type Props = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: Props) => {
  const router = useRouter();
  const { pathname } = router;

  const isHomeRoute = pathname === routes.HOME;
  const isAboutRoute = pathname === routes.ABOUT;
  const isPortfolioRoute = pathname === routes.PORTFOLIO;
  const isContactRoute = pathname === routes.CONTACT;
  return (
    <div
      className={classNames(styles.sidebar, {
        [styles.active]: isOpen,
      })}
    >
      <span className={styles.xMark} onClick={toggleSidebar} />
      <ul className={styles.menu}>
        <li
          className={classNames(styles.menuItem, {
            [styles.active]: isHomeRoute,
          })}
          onClick={toggleSidebar}
        >
          <Link href={routes.HOME}>Główna</Link>
        </li>
        <li
          className={classNames(styles.menuItem, {
            [styles.active]: isAboutRoute,
          })}
          onClick={toggleSidebar}
        >
          <Link href={routes.ABOUT}>O mnie</Link>
        </li>
        <li
          className={classNames(styles.menuItem, {
            [styles.active]: isPortfolioRoute,
          })}
          onClick={toggleSidebar}
        >
          <Link href={routes.PORTFOLIO}>Portfolio</Link>
        </li>
        <li
          className={classNames(styles.menuItem, {
            [styles.active]: isContactRoute,
          })}
          onClick={toggleSidebar}
        >
          <Link href={routes.CONTACT}>Kontakt</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
