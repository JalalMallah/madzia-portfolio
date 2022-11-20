import classNames from 'classnames';

import PageTitle from 'components/PageTitle';
import { INSTAGRAM_URL, FACEBOOK_URL, GOOGLE_MAPS_URL } from 'constants/URLs';

import styles from '../styles/contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.container}>
      <PageTitle text='Kontakt' />
      <div className={styles.innerWrapper}>
        <section className={styles.contactInfo}>
          <a
            href={FACEBOOK_URL}
            target='_blank'
            rel='noreferrer'
            className={styles.contactItem}
          >
            <span
              className={classNames(styles.maskedIcon, styles.facebookIcon)}
            />
            <span>Magdalena Sobkiewicz Fotografia</span>
          </a>
          <a
            href={INSTAGRAM_URL}
            target='_blank'
            rel='noreferrer'
            className={styles.contactItem}
          >
            <span
              className={classNames(styles.maskedIcon, styles.instagramIcon)}
            />
            <span>m_sobkiewicz_fotografia</span>
          </a>
          <a
            href='mailto:sobkiewiczmagdalena@gmail.com'
            className={styles.contactItem}
          >
            <span
              className={classNames(styles.maskedIcon, styles.envelopeIcon)}
            />
            <span>sobkiewiczmagdalena@gmail.com</span>
          </a>
          <a href='tel:668233327' className={styles.contactItem}>
            <span className={classNames(styles.maskedIcon, styles.phoneIcon)} />
            <span>668 233 327</span>
          </a>
          <a
            href={GOOGLE_MAPS_URL}
            target='_blank'
            rel='noreferrer'
            className={styles.contactItem}
          >
            <span
              className={classNames(styles.maskedIcon, styles.locationIcon)}
            />
            <span>Lipiny 1, 92-701 Łódź</span>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Contact;
