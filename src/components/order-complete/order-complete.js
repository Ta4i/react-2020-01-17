import React from 'react'
import {Result} from 'antd'
const OrderComplete = props => {
  return (
    <Result
      status="success"
      title="Your order is completed!"
      subTitle={`Order number: ${new Date().getTime()}`}
    />
  )
}
export default OrderComplete
