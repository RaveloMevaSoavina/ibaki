import React from 'react'
import styles from './Topbar.module.css';

function Topbar() {
    return (
        <div className={styles.container}>
            <span className={styles.logo}>. IBAKI .</span>
            <input type="text" placeholder="Rechecher" className={styles.search}/>
            <div className={styles.avatar}></div>
        </div>
    )
}

export default Topbar
