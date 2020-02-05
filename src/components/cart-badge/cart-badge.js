import React from 'react'
import {Badge, Button} from 'antd'
import styles from './cart-badge.module.css'
import {useSelector} from 'react-redux'
import {selectCartInfo} from '../../store/selectors/cart'

function CartBadge() {
  const cartInfo = useSelector(state => selectCartInfo(state))

  return (
    <Badge
      count={cartInfo.orderedDishes.totalAmount}
      className={styles.cartButtonContainer}
    >
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className={styles.cartButton}
      />
    </Badge>
  )
}

export default CartBadge
