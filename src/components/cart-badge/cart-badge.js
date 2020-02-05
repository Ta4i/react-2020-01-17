import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {Badge, Button, Modal} from 'antd'
import styles from './cart-badge.module.css'
import {useSelector} from 'react-redux'
import Order from '../order'

function CartBadge() {
  const amount = useSelector(state =>
    Object.values(state.cart).reduce((acc, count) => acc + count, 0)
  )

  const orderIds = 0

  const [modalWindowState, setWindowState] = useState()

  const showModal = useCallback(() => setWindowState(true), [setWindowState])

  const handleOk = useCallback(() => setWindowState(false), [setWindowState])

  const handleCancel = useCallback(() => setWindowState(false), [
    setWindowState,
  ])

  return (
    <Badge
      onClick={showModal}
      count={amount}
      className={styles.cartButtonContainer}
    >
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className={styles.cartButton}
      />
      <Modal
        title="Ваш заказ"
        visible={modalWindowState}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Order />
      </Modal>
    </Badge>
  )
}

CartBadge.defaultProps = {
  amount: 0,
  modalWindowState: false,
}

CartBadge.propTypes = {
  amount: PropTypes.number.isRequired,
  modalWindowState: PropTypes.bool.isRequired,
}

export default CartBadge
