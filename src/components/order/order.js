import React from 'react'
import PropTypes, {number} from 'prop-types'
import {Card, Typography, Button, Row, Col, List} from 'antd'
//import styles from './dish.module.css'
//import {connect} from 'react-redux'
//import {addToCart, removeFromCart} from '../../store/action-creators'

function Order(props) {
  const {orderList} = props

  return (
    <div>
      <h2>Заказ</h2>
      <List>{orderList}</List>
    </div>
  )
}

export const OrderProps = {
  orderList: PropTypes.shape({
    id: PropTypes.arrayOf(number),
  }),
}

Order.propTypes = OrderProps

export default Order
