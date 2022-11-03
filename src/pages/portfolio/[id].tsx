/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import PageTitle from 'components/PageTitle';

import { baptism } from 'constants/images/baptism';
import { weddings } from 'constants/images/weddings';
import { communions } from 'constants/images/communions';
import { outdoor } from 'constants/images/outdoor';
import { family } from 'constants/images/family';
import { specialEvents } from 'constants/images/specialEvents';
import { romantic } from 'constants/images/romantic';
import { portraits } from 'constants/images/portraits';

import 'react-lazy-load-image-component/src/effects/opacity.css';

import styles from '../../styles/category.module.scss';

type Categories =
  | 'chrzciny'
  | 'sluby_i_wesela'
  | 'komunie'
  | 'sesje_plenerowe'
  | 'sesje_rodzinne'
  | 'imprezy_okolicznosciowe'
  | 'sesje_romantyczne'
  | 'portrety';

type Image = {
  id: string;
  src: string;
};

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

const renderImages = (data: any) => {
  const { altText, firstColumn, secondColumn, thirdColumn, fourthColumn } =
    data;

  return (
    <div className={styles.images}>
      <div className={styles.column}>
        {firstColumn.map(({ id, src }: Image) => (
          <LazyLoadImage
            key={id}
            src={src}
            alt={altText}
            className={styles.image}
            effect='opacity'
          />
        ))}
      </div>
      <div className={styles.column}>
        {secondColumn.map(({ id, src }: Image) => (
          <LazyLoadImage
            key={id}
            src={src}
            alt={altText}
            className={styles.image}
            effect='opacity'
          />
        ))}
      </div>
      <div className={styles.column}>
        {thirdColumn.map(({ id, src }: Image) => (
          <LazyLoadImage
            key={id}
            src={src}
            alt={altText}
            className={styles.image}
            effect='opacity'
          />
        ))}
      </div>
      <div className={styles.column}>
        {fourthColumn.map(({ id, src }: Image) => (
          <LazyLoadImage
            key={id}
            src={src}
            alt={altText}
            className={styles.image}
            effect='opacity'
          />
        ))}
      </div>
    </div>
  );
};

const renderContent = (category: Categories) => {
  switch (category) {
    case 'chrzciny':
      return renderImages(baptism);
    case 'sluby_i_wesela':
      return renderImages(weddings);
    case 'komunie':
      return renderImages(communions);
    case 'sesje_plenerowe':
      return renderImages(outdoor);
    case 'sesje_rodzinne':
      return renderImages(family);
    case 'imprezy_okolicznosciowe':
      return renderImages(specialEvents);
    case 'sesje_romantyczne':
      return renderImages(romantic);
    case 'portrety':
      return renderImages(portraits);
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
      {renderContent(category as Categories)}
    </>
  );
};

export default Category;
