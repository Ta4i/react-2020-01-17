import React from 'react'
import styles from './order-item.module.css'
const OrderItem = props => {
  return (
    <div className={styles.divTableRow}>
      <div className={styles.divTableCell}>{props.name}</div>
      <div className={styles.divTableCell}>{props.dish}</div>
      <div className={styles.divTableCell}>{props.amount}</div>
      <div className={styles.divTableCell}>{props.price}</div>
      <div className={styles.divTableCell}>{props.sum}</div>
    </div>
  )
}
export default OrderItem
