import React from 'react'
import styles from './foodBanks.module.css'
import foodBanks from "../../assets/foodBanks.png"

function FoodBanks() {
  return (
    <div className={styles.containers}>
        <section className={styles.hero}>
            <div className={styles.title}>
                <h1>Food Banks: Fighting Food Waste and Hunger Together</h1>
                <img src={foodBanks} alt="food banks" />
            </div>
        </section>
        <section className={styles.information}>
            <div className={styles.informationBlock}>
                <h3>How do food banks contribute to SDG progress?</h3>
                <p>Food banks play a crucial role in advancing the United Nations Sustainable Development Goals (SDGs) by addressing hunger, reducing food waste, and promoting sustainable practices. Specifically, they contribute to:</p>
                <ul>
                    <li>SDG 2: Zero Hunger – Food banks ensure surplus food reaches vulnerable communities, providing essential nutrition and reducing food insecurity.</li>
                    <li>SDG 12: Responsible Consumption and Production</li>
                    <li>SDG 1: No Poverty</li>
                </ul>
            </div>
            <div className={styles.informationBlock}>
                <h3>Donate Your Leftovers, Reduce Waste, and Help End Hunger</h3>
                <p>Every leftover meal has the power to make a difference. By donating your surplus food, you’re not only preventing it from ending up in landfills but also ensuring it reaches those who need it most. This simple act reduces food waste, conserves valuable resources, and helps fight hunger in our communities. Together, we can create a world where no food is wasted, and no one goes hungry. Every donation counts—let’s turn leftovers into hope!</p>
            </div>
            <div className={styles.informationBlock}>
                <h3>How to donate your leftovers to the Nearest Food Bank</h3>
                <p>Donating your leftovers to a local food bank is a simple and impactful way to give back to your community. Start by checking the food bank's website or calling them to ensure they accept leftovers and to learn about any specific donation guidelines. Once you know the requirements, pack your leftovers properly in airtight containers, label them with the date, and make sure the food is in good condition. Next, drop off your donation at the designated location, or inquire if the food bank offers home pickup services for larger donations. Finally, spread the word by encouraging friends, family, and neighbors to donate as well, creating a ripple effect of generosity. Your leftover meal could be a lifeline for someone in need—donate today and help make a difference!</p>
            </div>
        </section>
        <section className={styles.foodBankLocations}>
            <button><a href="https://www.trussell.org.uk/emergency-food/find-a-foodbank" target='_blank'>Find the nearest food bank</a></button>
        </section>
    </div>
  )
}

export default FoodBanks