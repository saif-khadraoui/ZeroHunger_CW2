import React from 'react'
import styles from './leftoversIntoImpact.module.css'
import foodWaste from "../../assets/foodWaste.jpg"

function LeftoversIntoImpact() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Turn Leftovers Into Impact: Reducing Food Waste For a Hunger Free World</h1>
      </div>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.leftHeroContainer}>
            <h3>Who benefits from reducing Food waste?</h3>
            <p>Reducing food waste benefits everyone. Individuals save money by buying and using food more efficiently, while communities gain access to more resources for food-insecure families and vulnerable groups. Farmers and producers experience increased efficiency, leading to fairer profits and less resource waste. The environment also benefits through lower greenhouse gas emissions, reduced landfill waste, and better conservation of water and soil. Ultimately, future generations inherit a healthier planet with sustainable food systems and abundant resources. When we reduce food waste, we all win—economically, socially, and environmentally.</p>
          </div>
          <div className={styles.imageHeroContainer}>
            <img src={foodWaste} />
          </div>
          <div className={styles.rightHeroContainer}>
            <h3>Why using Leftover matters!!</h3>
            <p>Using leftovers isn’t just about saving food—it’s about making a meaningful impact. Every time we repurpose leftovers, we reduce food waste, conserve resources, and minimize the environmental footprint caused by food production and disposal. It also saves money, encourages creativity in the kitchen, and ensures that every meal reaches its full potential. Small actions, like enjoying yesterday’s dinner today, contribute to a larger movement toward sustainability and responsible consumption. Together, we can make every bite count!</p>
          </div>
        </div>
        {/* <div className={styles.heroImages}>
          <img src="../../assets/un0573750.jpeg" />
          <img src="../../assets/un0573750.jpeg" />
          <img src="../../assets/un0573750.jpeg" />
        </div> */}
      </section>
      <section className={styles.information}>
        <div className={styles.informationBlock}>
          <h3>Meal Generator reduces Food Waste</h3>
          <p>A Meal Generator is a powerful tool in the fight against food waste. By suggesting creative recipes based on the ingredients you already have, it ensures that no food goes unused or forgotten in your pantry or fridge. This not only saves money but also reduces the environmental impact of discarded food. With a Meal Generator, every ingredient gets a purpose, every meal becomes an opportunity, and every small effort contributes to a more sustainable future. Smart cooking means less waste and more impact!</p>
        </div>
        <div className={styles.informationBlock}>
          <h3>Reduce food waste increase the availability of resurces to feed more people</h3>
          <p>When we reduce food waste, we free up valuable resources—water, land, energy, and labor—that go into producing, transporting, and storing food. Every meal saved means more food can be redirected to those in need, helping to fight hunger and food insecurity. By being mindful of how we buy, store, and consume food, we create a more efficient food system where resources are used wisely and every bite counts. Reducing food waste isn’t just about saving food; it’s about ensuring everyone has a seat at the table.</p>
        </div>
        <div className={styles.informationBlock}>
          <h3>Ready to make a difference !! Use our Meal Generator</h3>
          <p>Take the first step towards reducing food waste with our Meal Generator! Transform leftover ingredients into delicious meals, save money, and help create a more sustainable future—one meal at a time. Every choice counts, and every meal matters. Start now and be a part of the change</p>
        </div>
      </section>
      <section className={styles.linkWrapper}>
        <div className={styles.link}>
          <button><a href="https://www.supercook.com/#/desktop" target='_blank'>Meal Generator</a></button>
        </div>
      </section>
    </div>
  )
}

export default LeftoversIntoImpact