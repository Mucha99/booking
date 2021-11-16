import React from 'react';
import styles from './Searchbar.module.scss';

function Searchbar() {
    return (
        <div className={styles.search}>
            <button className={styles.icon}><i class="fas fa-search"></i></button>
            <div className={styles.inputBox}>
                <input 
                    type='text' 
                    placeholder='Search...' 
                    className={styles.searchInput}
                />
            </div>
        </div>
    )
}

export default Searchbar; 