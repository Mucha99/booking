import React from 'react';
import styles from './Hotel.module.scss';

function Hotel() {
    return (
        <div className={styles.hotel}>
            <div className={styles.image}>
                <img src='https://inspirander.pl/images/EKSKLUZYWNY-HOTEL-SANTORINI-GRACE-SANTORINI-1.png' alt='hotel'/>
            </div>
            <div className={styles.info}>
                <h3>Name Hotel</h3>
                <p>Greece</p>
                <ul>
                    <li>2 bedroom</li>
                    <li>parking</li>
                    <li>shower</li>
                </ul>
            </div>
            <div className={styles.more}>
                <div>
                    <h5>Rating: <spam>8.5</spam></h5>
                    <p>220$/night</p>
                </div>
                <button>Show more</button>
            </div>
        </div>
    )
}

export default Hotel;