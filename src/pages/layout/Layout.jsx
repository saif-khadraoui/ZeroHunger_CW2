import React from 'react'
import styles from './layout.module.css'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className={styles.container}>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout