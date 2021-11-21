import React, { useState } from 'react';
import styles from './Searchbar.module.scss';

function Searchbar(props) {
    const [term, setTerm] = useState('');

    const search = () => {
        props.onSearch(term)
    }

    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            search();
        }
    }

    return (
        <div className={styles.search}>
            <button 
                className={styles.icon} 
                onClick={search}
            >
                <i class="fas fa-search"></i>
            </button>
            <div className={styles.inputBox}>
                <input 
                    value={term}
                    onChange={e => setTerm(e.target.value) }
                    onKeyDown={onKeyDownHandler}
                    type='text' 
                    placeholder='Search...' 
                    className={styles.searchInput}
                />
            </div>
        </div>
    )
}

export default Searchbar; 