import React, {useCallback, useMemo} from 'react'
import {Modal, Table} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import {transformModal} from '../../store/action-creators'
import {restaurants} from '../../fixtures'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Count',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
]

const Order = props => {
  const isVisible = useSelector(state => state.isVisible)
  const cart = useSelector(state => state.cart)
  const menus = restaurants.flatMap(restaurant => restaurant.menu)
  const dishes = useMemo(
    () =>
      menus.reduce((acc, dish) => {
        return {
          ...acc,
          [dish.id]: dish,
        }
      }, {}),
    [menus]
  )
  const dispatch = useDispatch()
  const closeModal = useCallback(() => {
    dispatch(transformModal(false))
  }, [dispatch])

  const data = Object.entries(cart).map(([id, count]) => {
    const {name, price} = dishes[id]
    return {
      key: id,
      name,
      count,
      price,
    }
  })

  const totalSum = Object.entries(cart).reduce(
    (acc, [id, count]) => acc + count * dishes[id].price,
    0
  )

  return (
    <Modal
      title="Your order"
      visible={isVisible}
      okText={'Pay'}
      onOk={() => {
        console.log('Pay clicked')
      }}
      cancelText={'Сontinue shopping'}
      onCancel={closeModal}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        size="middle"
        footer={() => `Total: ${totalSum}`}
      />
    </Modal>
  )
}

export default Order
