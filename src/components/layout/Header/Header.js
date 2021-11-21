import React from 'react';
import styles from './Header.module.scss';
import Searchbar from '../../common/Searchbar/Searchbar';

function Header(props) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Searchbar onSearch={props.onSearch}/>
        </header>
      </div>
      
    )
}

export default Header;