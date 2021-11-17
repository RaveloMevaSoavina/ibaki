import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/pages/Signing.module.css'

function signin() {
    return (
        <React.Fragment>
            <Head>
                <title>Register | iBaki</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <div className={styles.textContainer}>
                        <image src={'assets/images/saina.png'} alt='logo'/>
                        <div className={styles.title}>. IBAKI .</div>
                        <div className={styles.text}>“Etudie, non pour savoir plus, mais pour savoir mieux. ”</div>
                    </div>
                </div>
                <form className={styles.form}>
                    <div className={styles.containerForm_signup}>
                        <h1>Créer un compte</h1>
                        <p>· Bienvenue parmi nous · </p>
                        <label className={styles.label}>Nom</label>
                        <br/>
                        <input type="text" className={styles.input}/>
                        <br/>
                        <label className={styles.label}>Prénoms</label>
                        <br/>
                        <input type="text" className={styles.input}/>
                        <br/>
                        <label className={styles.label}>Statut</label>
                        <br/>
                        <select className={styles.select} >
                            <option>Etudiant</option>
                            <option>Instructeur</option>
                        </select>
                        <br/>
                        <label className={styles.label}>Email</label>
                        <br/>
                        <input type="text" className={styles.input}/>
                        <br/>
                        <label className={styles.label}>Mot de passe</label>
                        <br/>
                        <input type="text" className={styles.input}/>
                        <br/>
                        <label className={styles.label}>Confirmer le mot de passe</label>
                        <br/>
                        <input type="text" className={styles.input}/>
                        <br/><br/>
                        <button className={styles.submit}>Connexion</button>
                        <div className={styles.label_newAccount}>Déjà inscrit ? <Link href="/signin"><span className={styles.newAccount}>se connecter</span></Link></div>
                        </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default signin
