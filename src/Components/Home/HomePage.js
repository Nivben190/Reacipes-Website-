import React from 'react'
import styles from './index.module.css'
import './index.module.css'
import BgDiv from './BgDiv'
import NavbarComponent from '../Navbar/NavbarComponent'
import CardsDiv from './CardRecipe/CardsDiv'
import WelcomeDiv from './CardRecipe/WelcomeDiv'
const HomePage = () => {


  return (
    <div>
      <div className={styles.bgDiv}>
        <NavbarComponent />
        <BgDiv/>
         </div>
            <div className={styles.Homediv}>
              <h1>How Its Works</h1>       
             <CardsDiv/>
             <WelcomeDiv/>    
        </div>
    </div>
  )
}

export default HomePage