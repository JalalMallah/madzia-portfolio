import { useState } from 'react';
import classNames from 'classnames';
import Sidebar from 'components/Sidebar/Sidebar';
import { INSTAGRAM_URL, FACEBOOK_URL } from 'constants/URLs';

import styles from './navbarMobile.module.scss';

const NavbarMobile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <nav className={styles.container}>
        <span
          className={classNames(styles.maskedIcon, styles.burgerIcon)}
          onClick={toggleSidebar}
        />
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
      </nav>
    </>
  );
};

export default NavbarMobile;
