import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made by{' '}
      <a href='https://www.jalalmallah.io/' target='_blank' rel='noreferrer'>
        <u>Jalal Mallah</u>
      </a>
    </footer>
  );
};

export default Footer;
