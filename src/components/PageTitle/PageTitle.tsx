import { useRouter } from 'next/router';
import { josefin, nunito } from 'components/Layout/Layout';
import classNames from 'classnames';

import styles from './pageTitle.module.scss';

type Props = {
  text: string;
  withBackArrow?: boolean;
};

const PageTitle = ({ text, withBackArrow = false }: Props) => {
  const router = useRouter();

  return (
    <div className={classNames(styles.pageTitle, josefin.className)}>
      {withBackArrow && (
        <span
          className={classNames(styles.backArrow, nunito.className)}
          onClick={router.back}
        >
          &larr; Cofnij
        </span>
      )}
      <h2>{text}</h2>
    </div>
  );
};

export default PageTitle;
