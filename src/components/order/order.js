import React from 'react'
import CartItem from '../cart/cart-item'
import CartRow from '../cart/cart-row'
import Button from 'antd/es/button'
import {useSelector} from 'react-redux'
import {selectOrderedDishes} from '../../store/selectors'
import styles from './order.module.css'
import {Link} from 'react-router-dom'

function Order(props) {
  const orderedDishes = useSelector(selectOrderedDishes)

  const {dishes, totalPrice} = orderedDishes

  if (dishes.length === 0) {
    return <h1>Your Cart Is Empty</h1>
  }
  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Your Cart</h1>
      {dishes.map(({dish, amount, restaurant}) => (
        <CartItem
          dish={dish}
          amount={amount}
          restaurant={restaurant}
          key={dish.id}
        />
      ))}

      <hr />

      <CartRow leftContent={'Sub-total'} rightContent={`${totalPrice} $`} />
      <CartRow leftContent={'Delivery costs'} rightContent="FREE" />
      <CartRow leftContent={'Total'} rightContent={`${totalPrice} $`} />
      <Link to={'/order/complete'}>
        <Button type="primary" size="large">
          Send Order
        </Button>
      </Link>
    </div>
  )
}

export default Order
