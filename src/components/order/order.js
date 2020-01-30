import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import styles from './order.module.css'
import {Modal} from 'antd'
import {getDish} from '../../fixtures-api'
import Dish from '../dish'
import hideOrder from '../../store/action-creators/hide-order'
import TotalCost from '../total-cost'

function Order(props) {
  const {orderVisible, hideOrder, cart} = props

  return (
    <Modal
      title="Order"
      visible={orderVisible}
      onCancel={() => hideOrder()}
      style={{minWidth: '65%'}}
      footer={null}
    >
      <div className={styles.orderItems}>
        {Object.keys(cart).map(id => (
          <Dish key={id} dish={getDish(id)} />
        ))}
      </div>

      <div className={styles.orderTotalCost}>
        Total cost: <TotalCost />
      </div>
    </Modal>
  )
}

Order.propTypes = {
  // connect
  cart: PropTypes.object,
  orderVisible: PropTypes.bool,
  hideOrder: PropTypes.func,
}

const mapStateToProps = state => ({
  cart: state.cart,
  orderVisible: state.orderVisible,
})

const mapDispatchToProps = dispatch => ({
  hideOrder: () => dispatch(hideOrder()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)
