import React from 'react'
import {Link} from 'react-router-dom'
import styles from './order.module.css'
import CartRow from '../cart/cart-row'
import {clearCart} from '../../store/action-creators'
import {connect} from 'react-redux'
import {selectOrderedDishes} from '../../store/selectors'
import {Table} from 'antd'
const Order = props => {
  const {dishes, totalPrice} = props.orderedDishes
  if (dishes.length === 0) {
    return null
  }
  const dishesId = dishes.map(item => {
    return item.dish.id
  })
  console.log('dishesId=>', dishesId)
  const mappedDataToTable = dishes.map(({dish, amount, totalDishPrice}) => {
    return {
      key: dish.id,
      name: dish.name,
      amount: amount,
      price: dish.price,
      sum: totalDishPrice,
    }
  })

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'sum',
      key: 'sum',
      dataIndex: 'sum',
    },
  ]
  return (
    <div className={styles.orderCart}>
      <h1>Order</h1>
      <Table
        columns={columns}
        dataSource={mappedDataToTable}
        bordered={true}
        pagination={false}
      />
      <CartRow leftContent={'Sub-total'} rightContent={`${totalPrice} $`} />
      <CartRow leftContent={'Delivery costs'} rightContent="FREE" />
      <CartRow leftContent={'Total'} rightContent={`${totalPrice} $`} />
      <Link
        className={styles.orderButton}
        to={'/order/order-complete'}
        onClick={() => props.clearCart(dishesId)}
      >
        Send order
      </Link>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    clearCart: dishesId => {
      dispatch(clearCart(dishesId))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order)
