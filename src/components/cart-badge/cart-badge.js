import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import styles from './cart-badge.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {transformModal} from '../../store/action-creators'

function CartBadge() {
  const dispatch = useDispatch()

  const openModal = useCallback(() => {
    dispatch(transformModal(true))
  }, [dispatch])

  const amount = useSelector(state =>
    Object.values(state.cart).reduce((acc, count) => acc + count, 0)
  )
  return (
    <Badge count={amount} className={styles.cartButtonContainer}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className={styles.cartButton}
        onClick={openModal}
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
