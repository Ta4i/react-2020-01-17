import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Badge, Button, Modal} from 'antd'
import styles from './cart-badge.module.css'
import {useSelector} from 'react-redux'
import Order from '../order'

function CartBadge() {
  const [modalVisible, setModalVisible] = useState(false)

  const cart = useSelector(state => state.cart)

  const amount = useSelector(state =>
    Object.values(state.cart).reduce((acc, count) => acc + count, 0)
  )

  return (
    <Badge count={amount} className={styles.cartButtonContainer}>
      <Modal
        title="Order"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        style={{minWidth: '65%'}}
        footer={null}
      >
        <Order cart={cart} />
      </Modal>

      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className={styles.cartButton}
        onClick={() => setModalVisible(true)}
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
