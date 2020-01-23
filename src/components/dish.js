import React from 'react'
import {Button} from 'antd'
import {useAmount} from '../custom-hooks/use-amount'

function Dish({dish: {name, price}}) {
  const {amount, decrease, increase} = useAmount(0)
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
      <div>
        {amount}
        <Button onClick={decrease} type="primary" shape="circle" icon="minus" />
        <Button onClick={increase} type="primary" shape="circle" icon="plus" />
      </div>
    </div>
  )
}

export default Dish
