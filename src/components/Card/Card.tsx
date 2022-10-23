/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import styles from './card.module.scss';

type CardProps = {
  src: string;
  targetUrl: string;
  title: string;
};

const Card = ({ src, targetUrl, title }: CardProps) => {
  return (
    <Link href={`/portfolio/${targetUrl}`}>
      <div className={styles.card}>
        <div className={styles.cardOverlay}>{title}</div>
        <img src={src} alt={title} className={styles.cardImage} />
      </div>
    </Link>
  );
};

export default Card;
