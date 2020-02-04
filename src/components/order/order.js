import Button from 'antd/es/button'
import cx from 'classnames'
import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import styles from './order.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './order.css'
import {selectCartInfo} from '../../store/selectors'

function Order({className, orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  if (dishes.length === 0) {
    return null
  }
  return (
    <div className={cx(styles.cart, className)}>
      <TransitionGroup>
        {dishes.map(({dishId, dishName, price, amount}) => (
          <CSSTransition
            timeout={500}
            classNames="cart-item-animation"
            key={dishId}
          >
            <CartItem
              dishId={dishId}
              dishName={dishName}
              price={price}
              amount={amount}
              key={dishId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr />

      <CartRow leftContent={'Sub-total'} rightContent={`${totalPrice} $`} />
      <CartRow leftContent={'Delivery costs'} rightContent="FREE" />
      <CartRow leftContent={'Total'} rightContent={`${totalPrice} $`} />
      <Button type="primary" size="large" block>
        Order
      </Button>
    </div>
  )
}

export default connect(state => ({
  orderedDishes: selectCartInfo(state).orderedDishes,
}))(Order)
