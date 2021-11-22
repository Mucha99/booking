import React from 'react';
import styles from './Hotel.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    more: PropTypes.string,
    rating: PropTypes.number,
}; 

function Hotel(props) {
    return (
        <div className={styles.hotel}>
            <div className={styles.image}>
                <img src={props.image} alt='hotel'/>
            </div>
            <div className={styles.info}>
                <h3>{props.name}</h3>
                <p>
                    <i class="fas fa-map-marker-alt"></i> {props.location}
                </p>
                <ul>
                    <li>2 bedroom</li>
                    <li>parking</li>
                    <li>shower</li>
                </ul>
            </div>
            <div className={styles.more}>
                <div>
                    <h5>Rating: <spam>{props.rating}</spam></h5>
                    <p>220$/night</p>
                </div>
                <button>Show more</button>
            </div>
        </div>
    )
}

Hotel.propTypes = propTypes;
 
export default Hotel;