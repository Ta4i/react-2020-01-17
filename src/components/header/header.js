import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import Order from '../order'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Order />
    </header>
  )
}

export default Header
