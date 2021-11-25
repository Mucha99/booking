import React from 'react';
import styles from './Header.module.scss';

function Header(props) {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          {props.children}
        </header>
      </div>
      
    )
}

export default Header;