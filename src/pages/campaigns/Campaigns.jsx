import React, { useState } from 'react'
import styles from './campaigns.module.css'
import zeroHunger from "../../assets/zeroHunger.jpg"

function Campaigns() {

    const [resultQ1, setResultQ1] = useState();
    const [resultQ2, setResultQ2] = useState();
    const [resultQ3, setResultQ3] = useState();
    const [resultQ4, setResultQ4] = useState();


  return (
    <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.title}>
                <h1>Zero Hunger Campaign</h1>
            </div>
            <div className={styles.heroInformation}>
                <p>The Zero Hunger Campaign is a global initiative aimed at eradicating hunger, improving nutrition, and promoting sustainable agriculture. The goal is to ensure that no one goes to bed hungry and that every person has access to nutritious, affordable food. This campaign focuses on addressing the root causes of hunger, including poverty, inequality, and food waste, while also supporting local food systems and agricultural sustainability.</p>
                <div className={styles.heroImage}>
                    <img src={zeroHunger} alt="Zero hunger" />
                </div>
                <p>By reducing food waste, we can make more food available to those in need. Surplus food that would otherwise go to waste can be donated to food banks and community kitchens, helping feed vulnerable populations. Additionally, promoting responsible consumption and production through initiatives like the Zero Hunger Campaign encourages everyone to make mindful choices about the food they buy, consume, and discard, reducing the strain on global food resources.</p>
                <p>The Zero Hunger Campaign invites individuals, communities, and organizations to come together and take action. Whether through donating food, volunteering, or supporting sustainable farming practices, we all play a part in ensuring that no one is left hungry and that food systems are both equitable and resilient. Through collective effort, we can help create a world where hunger is no longer a barrier to health, opportunity, and well-being.</p>
            </div>
        </section>
        <section className={styles.quizWrapper}>
            <h2>Quiz</h2>
            <div className={styles.quiz}>
                <p>Reducing food waste can help combat climate change by lowering greenhouse gas emissions.</p>
                <div className={styles.buttons}>
                    <button onClick={() => setResultQ1(true)}>True</button>
                    <button onClick={() => setResultQ1(false)}>False</button>
                </div>
                {resultQ1 ? (
                        <p>Correct!</p>
                    ): resultQ1 == false ?(
                        <p>Incorrect!</p>
                    ): null}
            </div>
            <div className={styles.quiz}>
                <p>Storing all fruits together, regardless of type, helps them stay fresh longer.</p>
                <div className={styles.buttons}>
                    <button onClick={() => setResultQ2(false)}>True</button>
                    <button onClick={() => setResultQ2(true)}>False</button>
                </div>
                {resultQ2 ? (
                        <p>Correct!</p>
                    ): resultQ2 == false ?(
                        <p>Incorrect!</p>
                    ): null}
            </div>
            <div className={styles.quiz}>
                <p>Food banks play a crucial role in redistributing surplus food to people in need.</p>
                <div className={styles.buttons}>
                    <button onClick={() => setResultQ3(true)}>True</button>
                    <button onClick={() => setResultQ3(false)}>False</button>
                </div>
                {resultQ3 ? (
                        <p>Correct!</p>
                    ): resultQ3 == false ?(
                        <p>Incorrect!</p>
                    ): null}
            </div>
            <div className={styles.quiz}>
                <p>Proper storage of dairy products, such as milk and cheese, includes keeping them at room</p>
                <div className={styles.buttons}>
                    <button onClick={() => setResultQ4(false)}>True</button>
                    <button onClick={() => setResultQ4(true)}>False</button>
                </div>
                {resultQ4 ? (
                        <p>Correct!</p>
                    ): resultQ4 == false ?(
                        <p>Incorrect!</p>
                    ): null}
            </div>
        </section>
        <section className={styles.survery}>
            <h2>Survey</h2>
            <p>If you want to contact us, please fill out the form below!</p>
            <div className={styles.formWrapper}>
                <form>
                    <textarea type="text" placeholder="Subject" rows={30}/>
                    <div className={styles.button}>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Campaigns