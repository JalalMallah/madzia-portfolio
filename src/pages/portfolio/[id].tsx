import { useRouter } from 'next/router';

import PageTitle from 'components/PageTitle';

import styles from './category.module.scss';

const getTitle = (category: string) => {
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

const Category = () => {
  const router = useRouter();
  const { id: category } = router.query;

  return (
    <>
      <PageTitle text={getTitle(category as string)} />
      <div className={styles.images}>images go here.</div>
    </>
  );
};

export default Category;
