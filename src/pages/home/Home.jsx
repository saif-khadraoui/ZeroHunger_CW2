import React from 'react'
import styles from './home.module.css'

function Home() {
  return (
    <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <h1>Zero Hunger</h1>
                <h2>End Hunger, Sustain the Future</h2>
            </div>
            <div className={styles.scrollButton}>
                <button><a href="#information">Welcome</a></button>
            </div>
        </section>
        <section className={styles.information} id="information">
            <div className={styles.informationBlock}>
                <h3>Welcome to Zero Hunger. Together, we can make a vision.</h3>
                <p>At Zero Hunger, we are committed to building a future where no one goes to bed hungry. Our mission extends beyond food donations to address the root causes of hunger and malnutrition.</p>
            </div>
            <div className={styles.informationBlock}>
                <h3>Our Vision</h3>
                <p>Our vision is a world where every person has access to sufficient, nutritious food. We believe that by working together, we can create a future where hunger is a thing of the past.</p>
            </div>
            <div className={styles.informationBlock}>
                <h3>Get involved</h3>
                <p>There are many ways to get involved with Zero Hunger. Whether you want to volunteer, donate, or simply learn more about the issue of hunger, we have a place for you.</p>
            </div>
        </section>
        <section className={styles.articles}>
            <div className={styles.articlesWrapper}>
                <h3>Dive into these engaging articles on Zero Hunger to learn more! Click on each to read.</h3>
                <div className={styles.articleLinks}>
                    <ul>
                        <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0959652620350435" target="_blank">Smallholder farmers’ adaptation to climate change and its potential contribution to UN’s sustainable development goals of zero hunger and no poverty</a></li>
                        <li><a href="https://www.bing.com/search?q=Agricultural+investments+and+hunger+in+Africa+modeling+potential+contributions+to+SDG2+–+Zero+Hunger&cvid=575651fd1b804da89425e661b5ba7a20&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOdIBCDEwMTZqMGo5qAIBsAIB&FORM=ANAB01&PC=ASTS" target="_blank">Agricultural investments and hunger in Africa modeling potential contributions to SDG2 – Zero Hunger</a></li>
                        <li><a href="https://www.sciencedirect.com/science/article/pii/S0305750X19300294" target="_blank">Development pathways toward “zero hunger”</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home