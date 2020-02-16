import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import Language from '../language'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <CartBadge />
      <Language />
    </header>
  )
}

export default Header
