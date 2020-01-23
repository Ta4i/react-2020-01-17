import React from 'react'
import {Button} from 'antd'
import {useAmount} from '../custom-hooks/use-amount'
import {Card} from 'antd';

function Dish(props) {
    const {amount, decrease, increase} = useAmount(10);
    const divStyle = {width: '700px', margin: '10px'};

    return (
        <div style={divStyle}>
            <Card title={props.dish.name} extra={<h3><b>${props.dish.price}</b></h3>} style={{ width: 300 }} size="small">
                {props.dish.ingredients.map((ing) => (
                    <p>{ing}</p>
                ))}
                <p>{amount}&nbsp;&nbsp;&nbsp;
                    <Button onClick={decrease} type="primary" size={"small"}>-</Button>
                    &nbsp;
                    <Button onClick={increase} type="primary" size={"small"}>+</Button></p>
            </Card>
            <div>
            </div>
        </div>
    )
}

export default Dish
