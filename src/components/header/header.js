import React from 'react'
import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import Languages from '../languages'

function Header(props) {
  return (
    <header className={styles.header}>
      <Languages onLanguageChange={props.onLanguageChange} />
      <Logo />
      <CartBadge />
    </header>
  )
}

export default Header
