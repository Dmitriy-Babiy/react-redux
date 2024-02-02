import { Header } from '@components';
import styles from './home-page.module.scss';

export const HomePage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
      </div>
    </section>
  );
};
