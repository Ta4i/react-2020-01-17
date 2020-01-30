import React, {useMemo} from 'react'
import {List} from 'antd'
import {useSelector} from 'react-redux'
import styles from './order.module.css'

const Order = () => {
  const catalog = useSelector(state => state.restaurants)
    .flatMap(restaurant => restaurant.menu)
    .reduce((acc, dish) => ({...acc, [dish.id]: dish}), {})
  const cart = useSelector(state => state.cart)

  const orderSum = useMemo(
    () =>
      Object.entries(cart).reduce(
        (acc, [id, count]) => acc + catalog[id].price * count,
        0
      ),
    [cart, catalog]
  )
  return (
    <>
      <List
        size="small"
        header={<div className={styles.header}>Order</div>}
        footer={<div>Total: {orderSum}$</div>}
        bordered
        dataSource={Object.entries(cart)}
        renderItem={([id, count]) => (
          <List.Item className={styles.cartItem}>
            <div>{catalog[id].name}</div>
            <div>{count}</div>
          </List.Item>
        )}
      />
    </>
  )
}

export default Order

Order.defaultProps = {
  catalog: {},
}
