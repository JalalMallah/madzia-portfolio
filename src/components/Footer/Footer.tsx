/* eslint-disable @next/next/no-img-element */
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.madeBy}>
        Made by{' '}
        <a href='https://www.jalalmallah.io/' target='_blank' rel='noreferrer'>
          <u>Jalal Mallah</u>
        </a>
      </div> */}
      <div className={styles.footerText}>
        Operacja pn. Wzrost konkurencyjności na rynku województwa łódzkiego
        poprzez zakup profesjonalnego sprzętu fotograficznego oraz założenia
        studia fotograficznego współfinansowana jest ze środków Unii
        Europejskiej w ramach działania 19 Wsparcie dla rozwoju lokalnego w
        ramach inicjatywy LEADER, poddziałanie 19.2 Wsparcie na wdrażanie
        operacji w ramach strategii rozwoju lokalnego kierowanego przez
        społeczność, Programu Rozwoju Obszarów Wiejskich na lata 2014-2020.
      </div>
      <div className={styles.logosContainer}>
        <img src='/ster.jpg' alt='Ster' className={styles.footerImage} />
        <img src='/ue.jpg' alt='UE' className={styles.footerImage} />
        <img src='/leader.png' alt='Leader' className={styles.footerImage} />
        <img src='/prow.jpg' alt='PROW' className={styles.footerImage} />
      </div>
    </footer>
  );
};

export default Footer;
