import styles from './pageTitle.module.scss';

type Props = {
  text: string;
};

const PageTitle = ({ text }: Props) => {
  return <h2 className={styles.pageTitle}>{text}</h2>;
};

export default PageTitle;
