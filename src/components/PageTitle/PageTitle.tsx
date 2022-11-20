import { useRouter } from 'next/router';

import styles from './pageTitle.module.scss';

type Props = {
  text: string;
  withBackArrow?: boolean;
};

const PageTitle = ({ text, withBackArrow = false }: Props) => {
  const router = useRouter();

  return (
    <div className={styles.pageTitle}>
      {withBackArrow && (
        <span className={styles.backArrow} onClick={router.back}>
          &larr; Cofnij
        </span>
      )}
      <h2>{text}</h2>
    </div>
  );
};

export default PageTitle;
