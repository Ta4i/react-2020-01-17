import React from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import styles from './cart-badge.module.css'
import {useSelector, useDispatch} from 'react-redux'

function CartBadge(props) {
  const amount = useSelector(state =>
    Object.values(state.cart).reduce((acc, count) => acc + count, 0)
  )
  const dispatch = useDispatch()

  return (
    <Badge count={amount} className={styles.cartButtonContainer}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className={styles.cartButton}
        onClick={() => dispatch({type: 'SHOW_ORDERS'})}
      />
    </Badge>
  )
}

CartBadge.defaultProps = {
  amount: 0,
}

CartBadge.propTypes = {
  amount: PropTypes.number.isRequired,
}

export default CartBadge
