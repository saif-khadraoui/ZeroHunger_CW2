import React, { useState } from 'react'
import styles from './navbar.module.css'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io";

function Navbar() {

    const navigate = useNavigate()
    const [mobile, setMobile] = useState(false)

    const routePages = (page) => {
        setMobile(false)
        navigate(`/${page}`)
    }

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <h1 onClick={() => routePages("")}>ZeroHunger</h1>
        </div>
        <div className={styles.menuItems}>
            <p onClick={() => routePages("")}>Home</p>
            <p onClick={() => routePages("climateAndUrbanFarming")}>Climate and Urban Farming</p>
            <p onClick={() => routePages("leftoversIntoImpact")}>Leftovers into Impacts</p>
            <p onClick={() => routePages("foodBanks")}>Food banks</p>
            <p onClick={() => routePages("reduceWasteTips")}>Reduce Waste Tips</p>
            <p onClick={() => routePages("recipeIdeas")}>Recipe Ideas</p>
            <p onClick={() => routePages("campaigns")}>Campaigns</p>
        </div>
        <GiHamburgerMenu className={styles.hamburger} onClick={() => setMobile(true)} />
        {mobile && (
            <div className={styles.mobileMenu}>
                <div className={styles.closeMenu}>
                    <IoMdClose style={{ cursor: "pointer", fontSize: "32px" }} onClick={() => setMobile(false)} />
                </div>
                <p onClick={() => routePages("")}>Home</p>
                <p onClick={() => routePages("climateAndUrbanFarming")}>Climate and Urban Farming</p>
                <p onClick={() => routePages("leftoversIntoImpact")}>Leftovers into Impacts</p>
                <p onClick={() => routePages("foodBanks")}>Food banks</p>
                <p onClick={() => routePages("reduceWasteTips")}>Reduce Waste Tips</p>
                <p onClick={() => routePages("recipeIdeas")}>Recipe Ideas</p>
                <p onClick={() => routePages("campaigns")}>Campaigns</p>
            </div>
        )}
    </div>
  )
}

export default Navbar