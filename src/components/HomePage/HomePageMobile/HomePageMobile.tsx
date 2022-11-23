import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import routes from 'constants/routes';
import { josefin } from 'components/Layout/Layout';
import classNames from 'classnames';

import logo from '../../../../public/logo.png';

import styles from './homePageMobile.module.scss';

const HomePageMobile = () => {
  const router = useRouter();

  const goToHomePage = () => router.push(routes.HOME);
  const goToContactPage = () => router.push(routes.CONTACT);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt='Logo'
          layout='fill'
          objectFit='contain'
          priority
          onClick={goToHomePage}
        />
      </div>
      <h1 className={styles.title}>
        Nazywam się
        <br />{' '}
        <span className={classNames(styles.name, josefin.className)}>
          Magdalena Sobkiewicz
        </span>
        .
      </h1>
      <h3 className={styles.subtitle}>
        Uwieczniam wspomnienia robiąc wyjątkowe zdjęcia!
      </h3>
      <button className={styles.cta} onClick={goToContactPage}>
        Umów się na sesję!
      </button>
    </div>
  );
};

export default HomePageMobile;
