import PageTitle from 'components/PageTitle';

import styles from 'styles/portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <PageTitle text='Moje Portfolio' />
      <div className={styles.cardsContainer}>
        <div className={styles.card}>Chrzciny</div>
        <div className={styles.card}>Komunie</div>
        <div className={styles.card}>Śluby & Wesela</div>
        <div className={styles.card}>Sesje Plenerowe</div>
        <div className={styles.card}>Sesje Rodzinne</div>
        <div className={styles.card}>Urodziny</div>
        <div className={styles.card}>Romantyczne</div>
        <div className={styles.card}>Inne</div>
      </div>
    </div>
  );
};

export default Portfolio;
