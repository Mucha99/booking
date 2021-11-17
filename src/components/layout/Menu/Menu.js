import React from 'react';
import styles from '../Menu/Menu.module.scss';

function Menu( ) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <h2 >Booking<span>.</span></h2>
                </div>
                <nav className={styles.navigation}>
                    <a href="#">Home</a>
                    <a href="#">one</a>
                    <a href="#">two</a>
                    <a href="#">three</a>
                </nav>
            </div>
        </div>
    )
}

export default Menu;