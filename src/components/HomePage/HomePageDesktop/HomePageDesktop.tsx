/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import routes from 'constants/routes';

import styles from './homePageDesktop.module.scss';

const HomePageDesktop = () => {
  const router = useRouter();

  const goToContactPage = () => {
    router.push(routes.CONTACT);
  };

  const goToPortfolioPage = () => {
    router.push(routes.PORTFOLIO);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>
          Nazywam się
          <br /> <span className={styles.name}>Magdalena Sobkiewicz</span>.
        </h1>
        <h3 className={styles.subtitle}>
          Uwieczniam wspomnienia robiąc wyjątkowe zdjęcia!
        </h3>
        <button className={styles.cta} onClick={goToContactPage}>
          Umów się na sesję!
        </button>
      </div>
      <div className={styles.rightColumn}>
        <img
          src='/images/cards/family.jpg'
          alt='home picture'
          className={`${styles.image} ${styles.firstImage}`}
          onClick={goToPortfolioPage}
        />
        <img
          src='/images/natalia.jpg'
          alt='home picture'
          className={`${styles.image} ${styles.secondImage}`}
          onClick={goToPortfolioPage}
        />
        <img
          src='/images/cards/romantic.jpg'
          alt='home picture'
          className={`${styles.image} ${styles.thirdImage}`}
          onClick={goToPortfolioPage}
        />
      </div>
    </div>
  );
};

export default HomePageDesktop;
