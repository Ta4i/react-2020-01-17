import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import LangSwitcher from '../lang-switcher'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <CartBadge />
      <LangSwitcher />
    </header>
  )
}

export default Header
