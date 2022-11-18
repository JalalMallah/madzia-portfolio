import classNames from 'classnames';

import PageTitle from 'components/PageTitle';
import { INSTAGRAM_URL, FACEBOOK_URL } from 'constants/URLs';

import styles from '../styles/contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <PageTitle text='Kontakt' />
      <div className={styles.innerWrapper}>
        <section className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <span
              className={classNames(styles.maskedIcon, styles.facebookIcon)}
            />
            <a href={FACEBOOK_URL} target='_blank' rel='noreferrer'>
              Magdalena Sobkiewicz Fotografia
            </a>
          </div>
          <div className={styles.contactItem}>
            <span
              className={classNames(styles.maskedIcon, styles.instagramIcon)}
            />
            <a href={INSTAGRAM_URL} target='_blank' rel='noreferrer'>
              m_sobkiewicz_fotografia
            </a>
          </div>
          <div className={styles.contactItem}>
            <span
              className={classNames(styles.maskedIcon, styles.envelopeIcon)}
            />
            <a href='mailto:sobkiewiczmagdalena@gmail.com'>
              sobkiewiczmagdalena@gmail.com
            </a>
          </div>
          <div className={styles.contactItem}>
            <span className={classNames(styles.maskedIcon, styles.phoneIcon)} />
            <a href='tel:668233327'>668 233 327</a>
          </div>
          <div className={styles.contactItem}>
            <span
              className={classNames(styles.maskedIcon, styles.locationIcon)}
            />
            <span>Lipiny 1, 92-701 Łódź</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
