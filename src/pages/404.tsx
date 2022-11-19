import Link from 'next/link';
import routes from 'constants/routes';

import styles from '../styles/404.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.text}>Zabłądziłeś?</h4>
      <h4 className={styles.text}>
        Wygląda na to, że strona, której szukasz nie istnieje.
      </h4>
      <Link href={routes.HOME}>
        <a className={styles.button}>Powrót do strony głównej</a>
      </Link>
    </div>
  );
};

export default PageNotFound;
