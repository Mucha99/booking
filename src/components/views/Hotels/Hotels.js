import React from 'react';
import Hotel from '../Hotel/Hotel';
import styles from './Hotels.module.scss';
import PropTypes from 'prop-types';

const propTypes = {
  hotels: PropTypes.array.isRequired
};

class Hotels extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.hotels}>
          <h1 className={styles.title}>Time for adventure !</h1>
          {this.props.hotels.map(hotel => <Hotel key={hotel.id} {... hotel} />)}
        </div>
      </div>
      
    );
  }
}

Hotels.propTypes = propTypes;

export default Hotels;