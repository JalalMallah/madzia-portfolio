import { useRouter } from 'next/router';
import routes from 'constants/routes';

import styles from './homePage.module.scss';

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Nazywam się <span className={styles.name}>Magdalena Sobkiewicz</span>.
      </h1>
      <h3 className={styles.subtitle}>
        Uwieczniam wspomnienia robiąc świetne zdjęcia!
      </h3>
      <button
        className={styles.cta}
        onClick={() => router.push(routes.CONTACT)}
      >
        Umów się na sesję!
      </button>
      <div className={styles.backgroundImage} />
    </div>
  );
};

export default Home;
