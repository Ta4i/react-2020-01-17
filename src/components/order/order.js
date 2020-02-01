import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styles from './order.module.css'
import {getDish} from '../../fixtures-api'
import Dish from '../dish'
import TotalCost from '../total-cost'

function Order(props) {
  const {cart} = props

  return (
    <>
      <div className={styles.orderItems}>
        {Object.keys(cart).map(id => (
          <Dish key={id} dish={getDish(id)} />
        ))}
      </div>

      <div className={styles.orderTotalCost}>
        Total cost: <TotalCost />
      </div>
    </>
  )
}

Order.propTypes = {
  // connect
  cart: PropTypes.object,
}

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Order)
