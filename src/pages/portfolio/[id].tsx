/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import PageTitle from 'components/PageTitle';

import { studio } from 'constants/images/studio';
import { weddings } from 'constants/images/weddings';
import { communions } from 'constants/images/communions';
import { outdoor } from 'constants/images/outdoor';
import { family } from 'constants/images/family';
import { specialEvents } from 'constants/images/specialEvents';
import { romantic } from 'constants/images/romantic';
import { portraits } from 'constants/images/portraits';

import styles from '../../styles/category.module.scss';
import 'react-lazy-load-image-component/src/effects/opacity.css';

type Categories =
  | 'sesje_studyjne'
  | 'sluby_i_wesela'
  | 'komunie_i_chrzciny'
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
    case 'sesje_studyjne':
      return 'Sesje Studyjne';
    case 'sluby_i_wesela':
      return 'Śluby & Wesela';
    case 'komunie_i_chrzciny':
      return 'Komunie & Chrzciny';
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
    case 'sesje_studyjne':
      return renderImages(studio);
    case 'sluby_i_wesela':
      return renderImages(weddings);
    case 'komunie_i_chrzciny':
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
      <PageTitle text={getPageTitle(category as Categories)} withBackArrow />
      {renderContent(category as Categories)}
    </>
  );
};

export default Category;
