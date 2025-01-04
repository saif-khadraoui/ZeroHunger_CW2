import React from 'react'
import styles from './climateAndUrbanFarming.module.css'

function ClimateAndUrbanFarming() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>Climate Change and Food Resilience</h1> 
        </div>
        <section className={styles.hero}>
        </section>
        <section className={styles.information}>
            <div className={styles.informationBlock}>
                <h3>The Importance of Urban Farming</h3>
                <p>Urban farming is the practice of growing, processing, and distributing food in or around a village, town, or city. Urban farming can also involve animal husbandry, aquaculture, agroforestry, urban beekeeping, and horticulture. Urban farming is becoming increasingly popular in cities around the world, as it provides a way to grow food locally, reduce food miles, and improve food security.</p>
            </div>
            <div className={styles.informationBlock}>
                <h3>Key benefits of urban farming include:</h3>
                <p>1. Improved food security: Urban farming can help to increase access to fresh, healthy food in urban areas, where access to fresh produce may be limited.</p>
            </div>
        </section>
        <section className={styles.imageInformation}>
            <div className={styles.imageInformationWrapper}>
                <div className={styles.imageInformationBlock}>
                    <h4>Reducing Food Miles</h4>
                    <p>By enabling local food production, urban farming reduces transportation-related emissions and brings fresh produce straight to locals.</p>
                </div>
                <div className={styles.imageInformationBlock}>
                    <h4>Building Community Resilience</h4>
                    <p>Urban farms provide a local food source during emergencies while encouraging cooperation and strengthening connections within the community.</p>
                </div>
                <div className={styles.imageInformationBlock}>
                    <h4>Sustainability</h4>
                    <p>Urban farms make food systems more sustainable by reducing waste and conserving resources via techniques like composting and rainwater gathering.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ClimateAndUrbanFarming