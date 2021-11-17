import React from 'react'
import Head  from 'next/head'
import styles from '../../styles/Dashboard.module.css'

function dashboard() {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <h5><span className={styles.breadcrump}>Home</span> / Dashboard</h5>
            <h3 className={styles.title}>Dashboard</h3>

            <br/>
            <div className={styles.itemContainer}>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
            </div>
            
        </div>
    )
}

export default dashboard
