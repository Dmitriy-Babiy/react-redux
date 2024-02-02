import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import { ShoppingCartIcon, UserAvatarIcon } from '@assets/icons';

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logo}>Avion</div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink to='#!'>
                  <ShoppingCartIcon />
                </NavLink>
              </li>
              <li>
                <NavLink to='#!'>
                  <UserAvatarIcon />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
