import React from 'react'
import {Button, Modal} from 'antd'
import {useSelector} from 'react-redux'
import OrderItem from '../order-item'
import styles from './order-modal.module.css'

function OrderModal(props) {
  const cart = useSelector(state => state.cart)
  const resultOrder = useSelector(state =>
    state.restaurants.reduce(
      (resultOrder, restaurant) => {
        restaurant.menu.forEach(dish => {
          const amount = cart[dish.id]
          if (amount) {
            resultOrder.totalPrice += amount * dish.price
            resultOrder.orderedDishes.push({
              ...dish,
              amount: amount,
            })
          }
        })
        return resultOrder
      },
      {
        orderedDishes: [],
        totalPrice: 0,
      }
    )
  )
  return (
    <Modal
      visible={props.isCartVisible}
      title="YOUR CART"
      onCancel={props.hideOrder}
      footer={[
        <Button key="submit" type="primary">
          Order
        </Button>,
      ]}
    >
      <div className={styles.modalContainer}>
        {resultOrder.orderedDishes.map(dish => (
          <OrderItem key={dish.id} dish={dish} />
        ))}
      </div>
      <div className={styles.price}>
        Total Price: {resultOrder.totalPrice} $
      </div>
    </Modal>
  )
}

export default OrderModal
