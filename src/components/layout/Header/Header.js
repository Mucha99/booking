import React from 'react';
import styles from './Header.module.scss';
import Searchbar from '../../common/Searchbar/Searchbar';

function Header( ) {
    return (
      <header className={styles.header}>
          <Searchbar />
      </header>
    )
}

export default Header;