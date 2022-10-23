import PageTitle from 'components/PageTitle';
import Card from 'components/Card/Card';

import styles from 'styles/portfolio.module.scss';

const cards = [
  {
    id: 0,
    src: '/images/chrzest.jpg',
    targetUrl: 'chrzciny',
    title: 'Chrzciny',
  },

  {
    id: 1,
    src: '/images/slub.jpg',
    targetUrl: 'sluby_i_wesela',
    title: 'Śluby & Wesela',
  },
  {
    id: 2,
    src: '/images/komunie.jpg',
    targetUrl: 'komunie',
    title: 'Komunie',
  },
  {
    id: 3,
    src: '/images/plener.jpg',
    targetUrl: 'sesje_plenerowe',
    title: 'Sesje Plenerowe',
  },
  {
    id: 4,
    src: '/images/rodzinne.jpg',
    targetUrl: 'sesje_rodzinne',
    title: 'Sesje Rodzinne',
  },
  {
    id: 5,
    src: '/images/okolicznosciowe.jpg',
    targetUrl: 'urodziny_imprezy_okolicznosciowe',
    title: 'Urodziny & Imprezy Okolicznościowe',
  },
  {
    id: 6,
    src: '/images/romantyczne.jpg',
    targetUrl: 'sesje_romantyczne',
    title: 'Sesje Romantyczne',
  },
  {
    id: 7,
    src: '/images/inne.jpg',
    targetUrl: 'inne',
    title: 'Inne',
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
