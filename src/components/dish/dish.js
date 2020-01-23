import React from 'react'
import {Button} from 'antd'
import {useAmount} from '../../custom-hooks/use-amount'
import './dish.css'

function Dish(props) {
  const {amount, decrease, increase} = useAmount()
  return (
    <div className="Dish">
      <h3>{props.dish.name}</h3>
      <p>Price: {props.dish.price}</p>
      <div className="counters">
        <Button onClick={increase} type="primary">
          +
        </Button>
        <Button onClick={decrease} type="primary">
          -
        </Button>
      </div>
      <p className="amount">Amount: {amount}</p>
    </div>
  )
}

export default Dish
