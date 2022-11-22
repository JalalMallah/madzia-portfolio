import PageTitle from 'components/PageTitle';
import Card from 'components/Card/Card';

import styles from 'styles/portfolio.module.scss';

const cards = [
  {
    id: 0,
    src: '/images/cards/portraits.jpg',
    targetUrl: 'sesje_studyjne',
    title: 'Sesje Studyjne',
  },
  {
    id: 1,
    src: '/images/cards/weddings.jpg',
    targetUrl: 'sluby_i_wesela',
    title: 'Śluby & Wesela',
  },
  {
    id: 2,
    src: '/images/cards/communions.jpg',
    targetUrl: 'komunie_i_chrzciny',
    title: 'Komunie & Chrzciny',
  },
  {
    id: 3,
    src: '/images/cards/outdoor.jpg',
    targetUrl: 'sesje_plenerowe',
    title: 'Sesje Plenerowe',
  },
  {
    id: 4,
    src: '/images/cards/family.jpg',
    targetUrl: 'sesje_rodzinne',
    title: 'Sesje Rodzinne',
  },
  {
    id: 5,
    src: '/images/cards/romantic.jpg',
    targetUrl: 'sesje_romantyczne',
    title: 'Sesje Romantyczne',
  },
  {
    id: 6,
    src: '/images/cards/special_events.jpg',
    targetUrl: 'imprezy_okolicznosciowe',
    title: 'Imprezy Okolicznościowe',
  },
  {
    id: 7,
    src: '/images/cards/portraits.jpg',
    targetUrl: 'portrety',
    title: 'Portrety',
  },
];

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <PageTitle text='Moje Portfolio' />
      <div className={styles.cardsContainer}>
        {cards.map(({ id, src, targetUrl, title }) => (
          <Card key={id} src={src} targetUrl={targetUrl} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
