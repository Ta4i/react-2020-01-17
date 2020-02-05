import React from 'react'
import {Button, Col, Row, Typography} from 'antd'
import {addToCart, removeFromCart} from '../../../store/action-creators'
import styles from './cart-item.module.css'
import {connect} from 'react-redux'

function CartItem({dishId, dishName, amount, price, increment, decrement}) {
  return (
    <Row type="flex" align="middle" className={styles.cartItem}>
      <Col span={12} align="left">
        <Typography.Text>{dishName}</Typography.Text>
      </Col>
      <Col span={12} align="right">
        <Typography.Text>{price * amount} $</Typography.Text>
        <div className={styles.counter}>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon="minus"
            onClick={() => decrement(dishId)}
          />
          <Typography.Text className={styles.count}>{amount}</Typography.Text>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon="plus"
            onClick={() => increment(dishId)}
          />
        </div>
      </Col>
    </Row>
  )
}

export default connect(null, {
  increment: addToCart,
  decrement: removeFromCart,
})(CartItem)
