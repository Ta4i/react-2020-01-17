import React, {Component} from 'react'
import {Drawer} from 'antd'
import {connect} from 'react-redux'
import styles from './order.module.css'
import OrderItem from '../order-item'
import {hideOrders} from '../../store/action-creators/action-creators'

class Order extends Component {
  render() {
    const orderedDishes = this.props.orderedDishes
    const orders = []
    const sum = []

    for (let restaurant of this.props.restaurants) {
      for (let key in orderedDishes) {
        for (let dish of restaurant.menu) {
          if (key === dish.id) {
            orders.push(
              <OrderItem
                key={dish.id}
                name={restaurant.name}
                dish={dish.name}
                amount={orderedDishes[key]}
                price={dish.price}
                sum={orderedDishes[key] * dish.price}
              />
            )
            sum.push(dish.price * orderedDishes[key])
          }
        }
      }
    }
    let totalPrice = [...sum].reduce((sum, val) => sum + val, 0)
    return (
      <Drawer
        title="YOUR ORDERS"
        placement="left"
        closable={false}
        onClose={() => this.props.hide()}
        visible={this.props.visible}
        width="450px"
      >
        <div className={styles.order}>
          <div className={styles.divTable}>
            <div className={styles.divTableBody}>
              <div className={styles.divTableRow}>
                <div className={styles.divTableCell}>restaurant</div>
                <div className={styles.divTableCell}>dish</div>
                <div className={styles.divTableCell}>amount</div>
                <div className={styles.divTableCell}>price, '$'</div>
                <div className={styles.divTableCell}>sum, '$'</div>
              </div>
              {orders}
              <div className={styles.divTableRow}>
                <div className={styles.divTableCell}>&nbsp;</div>
                <div className={styles.divTableCell}>&nbsp;</div>
                <div className={styles.divTableCell}>&nbsp;</div>
                <div className={styles.divTableCell}>&nbsp;</div>
                <div className={styles.divTableCell}>{totalPrice}$</div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderedDishes: state.cart,
    restaurants: state.restaurants,
    visible: state.orders.showOrders,
  }
}
const mapDispatchToProps = dispatch => ({
  hide: () => dispatch(hideOrders()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Order)
