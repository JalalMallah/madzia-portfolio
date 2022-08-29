import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.madeBy}>
        Made by{' '}
        <a href='https://www.jalalmallah.io/' target='_blank' rel='noreferrer'>
          <u>Jalal Mallah</u>
        </a>
      </div>
      <div className={styles.logosContainer}>
        <img src='/ue.jpg' alt='UE' className={styles.footerImage} />
        <img src='/leader.png' alt='Leader' className={styles.footerImage} />
        <img src='/ster.jpg' alt='Ster' className={styles.footerImage} />
        <img src='/prow.jpg' alt='PROW' className={styles.footerImage} />
      </div>
    </footer>
  );
};

export default Footer;
