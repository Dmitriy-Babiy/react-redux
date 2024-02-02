import React from 'react';
import styles from './navigation-layout.module.scss';
import { Header } from '@components';

interface NavigationLayoutProps {
  children: React.ReactNode;
}

export const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </section>
  );
};
