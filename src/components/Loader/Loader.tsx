import styles from './loader.module.scss';

type Props = {
  containerClassName?: string;
};

const Loader = ({ containerClassName }: Props) => (
  <div className={containerClassName}>
    <div className={styles.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
