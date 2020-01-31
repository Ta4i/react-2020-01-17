import React from 'react'
import {connect} from 'react-redux'
import {useMemo} from 'react'

const Order = props => {
  const {cart, dishes} = props

  const computeTotalPrice = cart => {
    let sum = 0
    for (let [key, value] of Object.entries(cart)) {
      sum += dishes[key].price * value
    }
    return sum
  }
  const totalPrice = useMemo(() => computeTotalPrice(cart), [cart, dishes])

  return (
    <div>
      <div>
        {Object.entries(cart).map(dish => {
          const [id, quantity] = dish
          return (
            <div key={id}>
              {dishes[id].name} - {quantity}
            </div>
          )
        })}
      </div>
      <div>Полная стоимость заказа: {totalPrice}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    dishes: state.restaurants
      .flatMap(restaurant => restaurant.menu) // достаем блюда всех ресторанов
      .reduce((accumulator, dish) => ({...accumulator, [dish.id]: dish}), {}),
  }
}

export default connect(mapStateToProps)(Order)
