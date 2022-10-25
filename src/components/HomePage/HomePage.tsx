/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import routes from 'constants/routes';

import styles from './homePage.module.scss';

const Home = () => {
  const router = useRouter();

  const goToContacts = () => {
    router.push(routes.CONTACT);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>
          Nazywam się
          <br /> <span className={styles.name}>Magdalena Sobkiewicz</span>.
        </h1>
        <h3 className={styles.subtitle}>
          Uwieczniam wspomnienia robiąc świetne zdjęcia!
        </h3>
        <button className={styles.cta} onClick={goToContacts}>
          Umów się na sesję!
        </button>
      </div>
      <div className={styles.rightColumn}>
        <img
          src='/images/rodzinne.jpg'
          alt='home picture'
          className={`${styles.image} ${styles.firstImage}`}
        />
        <img
          src='/images/natalia.jpg'
          alt='home picture'
          className={`${styles.image} ${styles.secondImage}`}
        />
        <img
          src='/images/romantyczne.jpg'
          alt='home picture'
          className={`${styles.image} ${styles.thirdImage}`}
        />
      </div>
    </div>
  );
};

export default Home;
