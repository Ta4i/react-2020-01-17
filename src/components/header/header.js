import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'

function Header(props) {
  const {showOrder} = props
  return (
    <header className={styles.header}>
      <Logo />
      <a href="#showOrder" onClick={showOrder}>
        <CartBadge amount={0} />
      </a>
    </header>
  )
}

export default Header
