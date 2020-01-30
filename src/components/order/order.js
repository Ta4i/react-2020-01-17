import React, {useCallback, useState} from 'react'
import CartBadge from '../cart-badge'
import styles from './order.module.css'
import OrderModal from './order-modal'

function Order(props) {
  const [isCartVisible, toggleCartVisibility] = useState(false)
  const showOrder = useCallback(() => toggleCartVisibility(true), [
    toggleCartVisibility,
  ])
  const hideOrder = useCallback(() => toggleCartVisibility(false), [
    toggleCartVisibility,
  ])
  return (
    <div className={styles.orderContainer}>
      <CartBadge showOrder={showOrder}></CartBadge>
      <OrderModal isCartVisible={isCartVisible} hideOrder={hideOrder} />
    </div>
  )
}

export default Order
