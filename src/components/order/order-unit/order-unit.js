import React from 'react'

function OrderUnit(props) {
  const {dish, quantity} = props
  return (
    <>
      <hr />
      <b>{quantity}</b> {dish.name} {dish.price} $
      <hr />
    </>
  )
}

export default OrderUnit
