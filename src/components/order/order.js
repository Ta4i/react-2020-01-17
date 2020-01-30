import React, {Component} from 'react'
import {connect} from 'react-redux'
import OrderUnit from './order-unit'
import styles from './order.module.css'

class Order extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isVisible !== this.props.isVisible
  }

  render() {
    const {isVisible, cartDishes, fullMenu, onClose} = this.props
    let totalPrice = 0
    return (
      <div
        className={`${styles.orderComponent} ${
          isVisible ? styles.orderComponentShown : styles.orderComponentHidden
        }`}
      >
        <div className={styles.backButton} onClick={onClose}>
          <b>Go back</b>
        </div>
        <br />
        {cartDishes.map(dishEntry => {
          const [dishId, dishQuantity] = dishEntry
          if (!fullMenu[dishId]) {
            return null
          }
          totalPrice += fullMenu[dishId].price * dishQuantity
          return (
            <OrderUnit
              key={dishId}
              dish={fullMenu[dishId]}
              quantity={dishQuantity}
            />
          )
        })}
        Total: {totalPrice} $
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartDishes: Object.entries(state.cart),
    fullMenu: state.restaurants.reduce((acc, curr) => {
      const cache = {}
      curr.menu.forEach(item => {
        cache[item.id] = item
      })
      return {...acc, ...cache}
    }, {}),
  }
}

export default connect(mapStateToProps)(Order)
