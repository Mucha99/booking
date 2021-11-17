import React from 'react';
import styles from './Header.module.scss';
import Searchbar from '../../common/Searchbar/Searchbar';

function Header( ) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Searchbar />
        </header>
      </div>
      
    )
}

export default Header;