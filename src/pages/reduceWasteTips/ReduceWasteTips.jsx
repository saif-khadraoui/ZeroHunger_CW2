import React, { useState } from 'react'
import styles from './reduceWasteTips.module.css'

function ReduceWasteTips() {

    const [foodTip, setFoodTip] = useState("")

  return (
    <div className={styles.container}>
        <div className={styles.hero}>
            <div className={styles.title}>
                <h1>Tips to Reduce Food Waste</h1>
            </div>
            <div className={styles.heroInformation}>
                <h2>The importance of reducing food waste and why the topic is important as a whole.</h2>
                <p>Reducing food waste is crucial not only for the environment but also for global efforts to fight hunger and ensure sustainable food systems. Every year, millions of tons of food are wasted, yet millions of people around the world still suffer from hunger and malnutrition. By reducing food waste, we can help bridge this gap, ensuring that surplus food reaches those in need rather than ending up in landfills.Food waste contributes significantly to environmental problems, such as greenhouse gas emissions, water waste, and the loss of precious natural resources. Reducing food waste helps mitigate climate change, conserve water, and decrease pollution. Furthermore, the energy and labor involved in producing wasted food could be better utilized to support sustainable food systems that benefit both people and the planet.</p>
            </div>
        </div>
        <section className={styles.informationImages}>
            <div className={styles.informationImagesWrapper}>
                <div className={styles.informationImageBlock}>
                    <h3>Plan and Prep</h3>
                    <p>Effective meal planning and preparation are key strategies in reducing food waste. By planning your meals ahead of time, you can buy only the ingredients you need, ensuring that food doesn't go unused or spoil before it can be consumed. Preparing meals in advance also helps manage portion sizes, reducing the likelihood of leftovers that might go to waste.</p>
                    {/* <img src="/fake" alt="fake" /> */}
                </div>
                <div className={styles.informationImageBlock}>
                    <h3>Storing food correctly</h3>
                    <p>Proper food storage is essential to reducing waste and ensuring that food remains fresh and safe to eat for as long as possible. By storing food correctly, you can extend its shelf life and prevent it from spoiling prematurely. Different types of food require specific storage methods to maintain their quality. For example, fruits and vegetables should be stored separately to avoid premature ripening, while raw meats should be kept in airtight containers to prevent contamination.</p>
                    {/* <img src="/fake" alt="fake" /> */}
                </div>
                <div className={styles.informationImageBlock}>
                    <h3>Love leftovers</h3>
                    <p>Leftovers are more than just food that didn’t get eaten—they’re an opportunity to create new meals, save money, and reduce waste. Embracing leftovers means thinking creatively about how to reuse yesterday’s meal in a new and exciting way. From transforming roasted vegetables into a hearty soup to turning last night’s chicken into a tasty salad, loving leftovers helps reduce the need for new ingredients, conserving resources in the process.</p>
                    {/* <img src="/fake" alt="fake" /> */}
                </div>
            </div>
        </section>
        <section className={styles.foodTips}>
            <div className={styles.foodTipsButtons}>
                <h2>Click the button to find out more about food storage tips and what you can do to stop food wasting.</h2>
                <div className={styles.buttons}>
                    <button onClick={() => setFoodTip("Fruits")}>Fruits</button>
                    <button onClick={() => setFoodTip("Vegetables")}>Vegetables</button>
                    <button onClick={() => setFoodTip("Dairy")}>Dairy</button>
                    <button onClick={() => setFoodTip("Protein")}>Protein</button>
                    <button onClick={() => setFoodTip("Grains")}>Grains</button>
                </div>
            </div>
            <div className={styles.foodTipInformation}>
                <div className={styles.foodTipInformationWrapper}>
                    {foodTip == "Fruits" && <p>Using ventilated storage, such as perforated plastic bags or containers with air vents, can help fruits like apples, pears, and berries last longer by allowing them to breathe and preventing mold or spoilage. It’s also crucial to store different fruits separately, as fruits like apples, bananas, and tomatoes release ethylene gas, which can speed up the ripening of nearby sensitive fruits like berries and grapes.</p>}
                    {foodTip == "Vegetables" && <p>To prevent vegetables from going to waste, proper storage is key. Vegetables like leafy greens, carrots, and celery should be stored in the refrigerator, ideally in vegetable drawers that offer humidity control to keep them crisp. Root vegetables, such as potatoes, onions, and garlic, should be kept in a cool, dark, dry place like a pantry or cupboard to avoid sprouting.</p>}
                    {foodTip == "Dairy" && <p>To prevent dairy products from spoiling quickly, proper storage is essential. Always store dairy items, such as milk, cheese, and yogurt, in the coldest part of the refrigerator, ideally at or below 40°F (4°C). Ensure that dairy products are tightly sealed to prevent exposure to air, which can cause them to spoil faster. For items like milk, always check the expiration date and try to use them before they pass. If you have extra milk nearing its expiration, consider freezing it for future use in cooking or baking.</p>}
                    {foodTip == "Protein" && <p>Properly storing protein-rich foods, such as meat, poultry, fish, eggs, and legumes, is essential to maintaining their freshness and reducing waste. For meat, poultry, and fish, it’s important to store them in the coldest part of the refrigerator at or below 40°F (4°C). If you’re not planning to use them within a few days, freezing them is a good option to extend their shelf life. Be sure to wrap them tightly in plastic wrap or aluminum foil, or place them in airtight containers to prevent freezer burn.</p>}
                    {foodTip == "Grains" && <p>Grains like rice, pasta, quinoa, and oats should be stored in cool, dry places to maintain their freshness and prevent spoilage. Uncooked grains should be kept in airtight containers to protect them from moisture and pests. For bulk grains, consider using sealed jars or vacuum-sealed bags to extend their shelf life. Make sure to check expiration dates and rotate your stock to use older grains first.</p>}
                </div>
            </div>
        </section>
        <section className={styles.goals}>
            <div className={styles.goalsHeader}>
                <h1>Sustainbale goals linked to Zero Hunger</h1>
            </div>
            <div className={styles.goalsInformation}>
                <div className={styles.goalsInformationBlock}>
                    <h3>Climate action</h3>
                    <p>Taking action on climate change requires a collective effort to reduce our carbon footprint, and one powerful way to contribute is by minimizing food waste. The production, transportation, and disposal of food account for a significant portion of global greenhouse gas emissions. By reducing food waste, we lower the demand for resources like water, land, and energy, which are required to produce food that ultimately goes unused.</p>
                    {/* <img src="fake" alt="fake" /> */}
                </div>
                <div className={styles.goalsInformationBlock}>
                    <h3>Good Health and Well Being</h3>
                    <p>Reducing food waste not only benefits the environment but also contributes to better health and well-being. When we focus on using fresh, nutritious ingredients and repurposing leftovers in creative ways, we encourage healthier eating habits and reduce the temptation to rely on processed or convenience foods. Properly storing and managing food ensures that it stays fresh and safe to eat, minimizing the risk of foodborne illnesses.</p>
                    {/* <img src="fake" alt="fake" /> */}
                </div>
                <div className={styles.goalsInformationBlock}>
                    <h3>Responsible production and Consumption</h3>
                    <p>Responsible production and consumption are fundamental to creating a sustainable future. By reducing food waste, we take a step toward more responsible food systems. This involves making mindful choices about what and how much food we purchase, ensuring that it is consumed before it spoils, and avoiding overproduction or overconsumption.</p>
                    {/* <img src="fake" alt="fake" /> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default ReduceWasteTips