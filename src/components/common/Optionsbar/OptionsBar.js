import React from 'react';
import styles from '../Optionsbar/OptionsBar.module.scss';

function OptionsBar() {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
            <h3 className={styles.options}>Options</h3>
                <nav className={styles.locations}>
                <button className={styles.btnLocation}>All</button>
                    <button className={styles.btnLocation}>Spain</button>
                    <button className={styles.btnLocation}>France</button>
                    <button className={styles.btnLocation}>Greece</button>
                </nav>
                <div className={styles.changeColor}>
                    <button className={styles.btnColor}>
                        <i class="fas fa-tint"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OptionsBar;