import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import Switcher from '../switcher'

function Header({handleChangeLanguage}) {
  return (
    <header className={styles.header}>
      <Logo />
      <Switcher handleChangeLanguage={handleChangeLanguage} />
      <CartBadge />
    </header>
  )
}

export default Header
