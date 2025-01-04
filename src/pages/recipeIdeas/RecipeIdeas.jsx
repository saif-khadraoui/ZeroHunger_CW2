import React, { useState } from 'react'
import styles from './recipeIdeas.module.css'
import quickMeals from "../../assets/undraw_eating-together_4cna.png"
import budgetMeals from "../../assets/undraw_personal-finance_98p3.png"
import familyFavourites from "../../assets/undraw_family_6gj8.png"

function RecipeIdeas() {

    const [recipe, setRecipe] = useState("")

  return (
    <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.title}>
                <h1>Recipes to Reduce Food Waste</h1>
            </div>
        </section>
        <section className={styles.information}>
            <div className={styles.informationBlock}>
                <h3>Welcome to Recipes To Reduce Food Waste</h3>
                <p>At Recipes to Reduce Food Waste, we believe that every meal counts—and so does every ingredient. Our mission is to help you create delicious and sustainable dishes by making the most of what you have in your kitchen. By using leftovers, repurposing ingredients, and minimizing waste, we can all contribute to a more sustainable future.</p>
            </div>
            <div className={styles.informationBlock}>
                <h3>How these recipes contribute to achieve SDG progress?</h3>
                <p>The recipes featured here are not just about cooking—they're part of a broader effort to support the United Nations Sustainable Development Goals (SDGs), particularly Goal 12: Responsible Consumption and Production. By focusing on reducing food waste, these recipes play a crucial role in creating a more sustainable food system, conserving resources, and reducing the environmental impact of food production.</p>
            </div>
        </section>
        <section className={styles.recipes}>
            <div className={styles.recipesTitle}>
                <h2>Click on the meal types to read the recipes:</h2>
            </div>
            <div className={styles.recipesButtons}>
                <div className={styles.recipeButton}>
                    <h3>Quick Meals</h3>
                    <img src={quickMeals} alt="Quick meal" onClick={() => setRecipe("QuickMeals")} />
                    {recipe == "QuickMeals" && (
                        <div className={styles.recipe}>
                            <h4>Quick Veggie Stir-Fry</h4>
                            <p>Ingredients</p>
                            <ul>
                                <li>1 cup mixed vegetables (e.g., bell peppers, carrots, broccoli, and snap peas)</li>
                                <li>1 tablespoon olive oil</li>
                                <li>2 cloves garlic, minced</li>
                                <li>1 tablespoon soy sauce</li>
                                <li>1 teaspoon sesame oil</li>
                                <li>1/2 cup cooked rice or noodles</li>
                                <li>Optional toppings: sesame seeds, chopped green onions</li>
                            </ul>
                            <p>Instructions</p>
                            <p>Heat olive oil in a pan over medium heat. Add garlic and sauté for 1 minute until fragrant.
                                Add the mixed vegetables and stir-fry for 5-7 minutes until tender but still crisp.
                                Drizzle with soy sauce and sesame oil, stirring to coat the vegetables evenly.
                                Add the cooked rice or noodles to the pan and toss everything together until well mixed.
                                Serve hot, garnished with sesame seeds and green onions if desired.</p>
                        </div>
                    )}
                </div>
                <div className={styles.recipeButton}>
                    <h3>Budget Recipes</h3>
                    <img src={budgetMeals} alt="Budget meal" onClick={() => setRecipe("BudgetRecipes")}/>
                    {recipe == "BudgetRecipes" && (
                        <div className={styles.recipe}>
                            <h4>Quick Veggie Stir-Fry</h4>
                            <p>Ingredients</p>
                            <ul>
                                <li>1 cup mixed vegetables (e.g., bell peppers, carrots, broccoli, and snap peas)</li>
                                <li>1 tablespoon olive oil</li>
                                <li>2 cloves garlic, minced</li>
                                <li>1 tablespoon soy sauce</li>
                                <li>1 teaspoon sesame oil</li>
                                <li>1/2 cup cooked rice or noodles</li>
                                <li>Optional toppings: sesame seeds, chopped green onions</li>
                            </ul>
                            <p>Instructions</p>
                            <p>Heat olive oil in a pan over medium heat. Add garlic and sauté for 1 minute until fragrant.
                                Add the mixed vegetables and stir-fry for 5-7 minutes until tender but still crisp.
                                Drizzle with soy sauce and sesame oil, stirring to coat the vegetables evenly.
                                Add the cooked rice or noodles to the pan and toss everything together until well mixed.
                                Serve hot, garnished with sesame seeds and green onions if desired.</p>
                        </div>
                    )}
                </div>
                <div className={styles.recipeButton}>
                    <h3>Family Favourites</h3>
                    <img src={familyFavourites} alt="Family favourites" onClick={() => setRecipe("FamilyFavourites")}/>
                    {recipe == "FamilyFavourites" && (
                        <div className={styles.recipe}>
                            <h4>Quick Veggie Stir-Fry</h4>
                            <p>Ingredients</p>
                            <ul>
                                <li>1 cup mixed vegetables (e.g., bell peppers, carrots, broccoli, and snap peas)</li>
                                <li>1 tablespoon olive oil</li>
                                <li>2 cloves garlic, minced</li>
                                <li>1 tablespoon soy sauce</li>
                                <li>1 teaspoon sesame oil</li>
                                <li>1/2 cup cooked rice or noodles</li>
                                <li>Optional toppings: sesame seeds, chopped green onions</li>
                            </ul>
                            <p>Instructions</p>
                            <p>Heat olive oil in a pan over medium heat. Add garlic and sauté for 1 minute until fragrant.
                                Add the mixed vegetables and stir-fry for 5-7 minutes until tender but still crisp.
                                Drizzle with soy sauce and sesame oil, stirring to coat the vegetables evenly.
                                Add the cooked rice or noodles to the pan and toss everything together until well mixed.
                                Serve hot, garnished with sesame seeds and green onions if desired.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    </div>
  )
}

export default RecipeIdeas