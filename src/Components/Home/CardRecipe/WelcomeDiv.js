import React from 'react'
import styles from  "../index.module.css"
const WelcomeDiv = () => {
  return (
    <div className={styles.welcome}>
        <div>
        <img  alt='food img' className={styles.logo} src="https://www.expatica.com/app/uploads/sites/5/2014/05/french-food.jpg" />
        </div>
        <div className={styles.Paragraph}>
        <h1>Welcome</h1>
        <p>Home Chef is a great Option for you to make meals at home that are health and enjoyable.
            <br/>
         We have a variety of categories to choose from that help meet your needs in your health journey.<br/>You can customize the ingredients you want to be added in your meal.</p>
        <h2 className={styles.secondP}>Just Choose A Recipe And Start Cooking</h2>
        <h2 className={styles.H2}> everything else is on us</h2>
        </div>
    </div>
  )
}

export default WelcomeDiv