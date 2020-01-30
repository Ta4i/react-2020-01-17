import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import Order from '../order'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <CartBadge amount={0} />
      <Order />
    </header>
  )
}

export default Header
