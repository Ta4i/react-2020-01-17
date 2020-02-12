import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectOrderedDishes} from '../../store/selectors'
import CartItem from '../cart/cart-item'
import CartRow from '../cart/cart-row'
import styles from './order.module.css'
import {Button} from 'antd'
import {clearCart} from '../../store/action-creators'
import {useHistory} from 'react-router-dom'

const Order = props => {
  const {orderedDishes, clearCart} = props
  const {dishes, totalPrice} = orderedDishes
  const history = useHistory()

  const handleSendOrderClick = () => {
    clearCart()
    history.push('/complete')
  }

  return (
    <div className={styles.order}>
      <h1 className={styles.heading}>Order</h1>
      {dishes.length > 0 ? (
        <>
          <div className={styles.dishes}>
            {dishes.map(({dish, amount, restaurant}) => (
              <CartItem
                dish={dish}
                amount={amount}
                restaurant={restaurant}
                key={dish.id}
              />
            ))}
          </div>
          <hr />
          <div className={styles.total}>
            <CartRow
              leftContent={'Sub-total'}
              rightContent={`${totalPrice} $`}
            />
            <CartRow leftContent={'Delivery costs'} rightContent="FREE" />
            <CartRow leftContent={'Total'} rightContent={`${totalPrice} $`} />
          </div>
          <Button type="primary" onClick={handleSendOrderClick}>
            Send order
          </Button>
        </>
      ) : (
        <div>Order is empty</div>
      )}
    </div>
  )
}

Order.propTypes = {
  orderedDishes: PropTypes.object,
  clearCart: PropTypes.func,
}

const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})

const mapDispatchToProps = {
  clearCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
