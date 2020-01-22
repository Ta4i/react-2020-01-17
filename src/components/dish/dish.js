import React from 'react'
import {Button} from 'antd'
import {useAmount} from '../../custom-hooks/use-amount'
import './dish.css'

function Dish(props) {
  const {amount, decrease, increase} = useAmount(10)
  return (
    <div className="dish">
      <h3>Name of dish: {props.dish.name}</h3>
      <p>Price: {props.dish.price}</p>
      Amount: {amount}
      <Button onClick={decrease} type="primary">
        -
      </Button>
      <Button onClick={increase} type="primary">
        +
      </Button>
    </div>
  )
}
export default Dish
