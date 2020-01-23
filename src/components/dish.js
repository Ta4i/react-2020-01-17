import React from 'react'
import {Button} from 'antd'
import {useAmount} from '../custom-hooks/use-amount'
import {Card} from 'antd'

function Dish(props) {
  const {amount, decrease, increase} = useAmount(10)
  return (
    // <div>
    //   <p>{props.dish.name}</p>
    //   <p>{props.dish.price}</p>
    //   <div>
    //     {amount}
    //     <Button onClick={decrease} type="primary">
    //       -
    //     </Button>
    //     <Button onClick={increase} type="primary">
    //       +
    //     </Button>
    //   </div>
    // </div>

    <Card
      style={{margin: '16px 0'}}
      type="inner"
      title={props.dish.name}
      extra={
        <span>
          <Button
            type="primary"
            shape="circle"
            icon="minus"
            onClick={decrease}
            type="primary"
          />
          <span style={{paddingLeft: '8px'}}>
            <Button
              type="primary"
              shape="circle"
              icon="plus"
              onClick={increase}
              type="primary"
            />
          </span>
        </span>
      }
    >
      <p>Price: {props.dish.price}$</p>
      <p>
        Ingredients:{' '}
        {props.dish.ingredients.map(ingredient => (
          <span>{ingredient} </span>
        ))}
      </p>
      <div>
        <p>Ordered: {amount}pc</p>
      </div>
    </Card>
  )
}

export default Dish
