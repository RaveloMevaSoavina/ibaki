import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/pages/Signing.module.css'

function signin() {
    return (
        <React.Fragment>
            <Head>
                <title>Login | iBaki</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.textContainer}>
                        <image src={'assets/images/saina.png'} alt='logo'/>
                        <div className={styles.title}> • IBAKI •</div>
                        <div className={styles.text}>“Etudie, non pour savoir plus, mais pour savoir mieux. ”</div>
                    </div>
                </div>
                <form className={styles.form}>
                    <div className={styles.containerForm_signin}>
                        <h1>Ravi de vous revoir</h1>
                        <p>Veuillez vous authentifier. </p>
                        <label className={styles.label}>Email</label>
                        <br/>
                        <input type="text" className={styles.input}/>
                        <br/>
                        <label className={styles.label}>Mot de passe</label>
                        <br/>
                        <input type="text" className={styles.input}/>
                        <br/>
                        <input type="checkbox"/>
                        <span className={styles.label}>Se souvenir de moi</span>
                        <br/><br/>
                        <button className={styles.submit}>Connexion</button>
                        <div className={styles.label_newAccount}>Nouveau sur iBaki? Veuillez vous <Link href="/signup"><span className={styles.newAccount}>inscrire ici</span></Link></div>
                        </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default signin
