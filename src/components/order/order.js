import React, {useCallback} from 'react'
import {Modal, Typography, Row} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import {transformModal} from '../../store/action-creators'

const Order = props => {
  const isVisible = useSelector(state => state.isVisible)
  const dispatch = useDispatch()
  const closeModal = useCallback(() => {
    dispatch(transformModal(false))
  }, [dispatch])

  return (
    <Modal
      title="Your order"
      visible={isVisible}
      okText={'Pay'}
      onOk={() => {
        console.log('Ok clicked')
      }}
      cancelText={'Сontinue shopping'}
      onCancel={closeModal}
    >
      <Row>
        <Typography.Text>{'AAA'}</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>{'BBB'}</Typography.Text>
      </Row>
      <Row>
        <Typography.Text>{'CCC'}</Typography.Text>
      </Row>
    </Modal>
  )
}

export default Order
