/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import PageTitle from 'components/PageTitle';

import styles from './category.module.scss';

type Categories =
  | 'chrzciny'
  | 'sluby_i_wesela'
  | 'komunie'
  | 'sesje_plenerowe'
  | 'sesje_rodzinne'
  | 'imprezy_okolicznosciowe'
  | 'sesje_romantyczne'
  | 'portrety';

const getPageTitle = (category: Categories) => {
  switch (category) {
    case 'chrzciny':
      return 'Chrzciny';
    case 'sluby_i_wesela':
      return 'Śluby & Wesela';
    case 'komunie':
      return 'Komunie';
    case 'sesje_plenerowe':
      return 'Sesje Plenerowe';
    case 'sesje_rodzinne':
      return 'Sesje Rodzinne';
    case 'imprezy_okolicznosciowe':
      return 'Imprezy Okolicznościowe';
    case 'sesje_romantyczne':
      return 'Sesje Romantyczne';
    case 'portrety':
      return 'Portrety';
    default:
      return '';
  }
};

const renderBaptism = () => (
  <div className={styles.images}>
    <div className={styles.column}>
      <img src='/images/baptism/01.jpg' alt='Image' className={styles.image} />
      <img src='/images/baptism/02.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/baptism/03.jpg' alt='Image' className={styles.image} />
      <img src='/images/baptism/04.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/baptism/05.jpg' alt='Image' className={styles.image} />
      <img src='/images/baptism/06.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/baptism/07.jpg' alt='Image' className={styles.image} />
      <img src='/images/baptism/08.jpg' alt='Image' className={styles.image} />
    </div>
  </div>
);

const renderWeddings = () => (
  <div className={styles.images}>
    <div className={styles.column}>
      <img src='/images/weddings/01.jpg' alt='Image' className={styles.image} />
      <img src='/images/weddings/02.jpg' alt='Image' className={styles.image} />
      <img src='/images/weddings/03.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/weddings/04.jpg' alt='Image' className={styles.image} />
      <img src='/images/weddings/05.jpg' alt='Image' className={styles.image} />
      <img src='/images/weddings/06.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/weddings/07.jpg' alt='Image' className={styles.image} />
      <img src='/images/weddings/08.jpg' alt='Image' className={styles.image} />
      <img src='/images/weddings/09.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/weddings/10.jpg' alt='Image' className={styles.image} />
      <img src='/images/weddings/11.jpg' alt='Image' className={styles.image} />
      <img src='/images/weddings/12.jpg' alt='Image' className={styles.image} />
    </div>
  </div>
);

const renderCommunions = () => (
  <div className={styles.images}>
    <div className={styles.column}>
      <img
        src='/images/communions/01.jpg'
        alt='Image'
        className={styles.image}
      />
      <img
        src='/images/communions/02.jpg'
        alt='Image'
        className={styles.image}
      />
    </div>
    <div className={styles.column}>
      <img
        src='/images/communions/03.jpg'
        alt='Image'
        className={styles.image}
      />
      <img
        src='/images/communions/04.jpg'
        alt='Image'
        className={styles.image}
      />
    </div>
    <div className={styles.column}>
      <img
        src='/images/communions/05.jpg'
        alt='Image'
        className={styles.image}
      />
      <img
        src='/images/communions/06.jpg'
        alt='Image'
        className={styles.image}
      />
    </div>
    <div className={styles.column}>
      <img
        src='/images/communions/07.jpg'
        alt='Image'
        className={styles.image}
      />
      <img
        src='/images/communions/08.jpg'
        alt='Image'
        className={styles.image}
      />
    </div>
  </div>
);

const renderOutdoor = () => (
  <div className={styles.images}>
    <div className={styles.column}>
      <img src='/images/outdoor/01.jpg' alt='Image' className={styles.image} />
      <img src='/images/outdoor/02.jpg' alt='Image' className={styles.image} />
      <img src='/images/outdoor/03.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/outdoor/04.jpg' alt='Image' className={styles.image} />
      <img src='/images/outdoor/05.jpg' alt='Image' className={styles.image} />
      <img src='/images/outdoor/06.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/outdoor/07.jpg' alt='Image' className={styles.image} />
      <img src='/images/outdoor/08.jpg' alt='Image' className={styles.image} />
      <img src='/images/outdoor/09.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/outdoor/10.jpg' alt='Image' className={styles.image} />
      <img src='/images/outdoor/11.jpg' alt='Image' className={styles.image} />
      <img src='/images/outdoor/12.jpg' alt='Image' className={styles.image} />
    </div>
  </div>
);

const renderFamily = () => (
  <div className={styles.images}>
    <div className={styles.column}>
      <img src='/images/family/01.jpg' alt='Image' className={styles.image} />
      <img src='/images/family/02.jpg' alt='Image' className={styles.image} />
      <img src='/images/family/03.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/family/04.jpg' alt='Image' className={styles.image} />
      <img src='/images/family/05.jpg' alt='Image' className={styles.image} />
      <img src='/images/family/06.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/family/07.jpg' alt='Image' className={styles.image} />
      <img src='/images/family/08.jpg' alt='Image' className={styles.image} />
      <img src='/images/family/09.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/family/10.jpg' alt='Image' className={styles.image} />
      <img src='/images/family/11.jpg' alt='Image' className={styles.image} />
      <img src='/images/family/12.jpg' alt='Image' className={styles.image} />
    </div>
  </div>
);

const renderSpecialEvents = () => <h3>Special Events</h3>;

const renderRomantic = () => (
  <div className={styles.images}>
    <div className={styles.column}>
      <img src='/images/romantic/01.jpg' alt='Image' className={styles.image} />
      <img src='/images/romantic/02.jpg' alt='Image' className={styles.image} />
      <img src='/images/romantic/03.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/romantic/04.jpg' alt='Image' className={styles.image} />
      <img src='/images/romantic/05.jpg' alt='Image' className={styles.image} />
      <img src='/images/romantic/06.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/romantic/07.jpg' alt='Image' className={styles.image} />
      <img src='/images/romantic/08.jpg' alt='Image' className={styles.image} />
      <img src='/images/romantic/09.jpg' alt='Image' className={styles.image} />
    </div>
    <div className={styles.column}>
      <img src='/images/romantic/10.jpg' alt='Image' className={styles.image} />
      <img src='/images/romantic/11.jpg' alt='Image' className={styles.image} />
      <img src='/images/romantic/12.jpg' alt='Image' className={styles.image} />
    </div>
  </div>
);

const renderPortraits = () => <h3>Portraits</h3>;

const renderImages = (category: Categories) => {
  switch (category) {
    case 'chrzciny':
      return renderBaptism();
    case 'sluby_i_wesela':
      return renderWeddings();
    case 'komunie':
      return renderCommunions();
    case 'sesje_plenerowe':
      return renderOutdoor();
    case 'sesje_rodzinne':
      return renderFamily();
    case 'imprezy_okolicznosciowe':
      return renderSpecialEvents();
    case 'sesje_romantyczne':
      return renderRomantic();
    case 'portrety':
      return renderPortraits();
    default:
      return '';
  }
};

const Category = () => {
  const router = useRouter();
  const { id: category } = router.query;

  return (
    <>
      <PageTitle text={getPageTitle(category as Categories)} />
      {renderImages(category as Categories)}
    </>
  );
};

export default Category;
