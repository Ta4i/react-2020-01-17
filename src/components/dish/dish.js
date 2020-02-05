import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Card, Typography, Button, Row, Col} from 'antd'
import styles from './dish.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart, removeFromCart} from '../../store/action-creators'
import {selectAmountFromCart} from '../../store/selectors/cart'
import {selectDish} from '../../store/selectors/dishes'

function Dish(props) {
  const {id} = props
  const selectDishMemo = useCallback(state => selectDish(state, props), [props])
  const dish = useSelector(selectDishMemo)
  const selectAmountMemo = useCallback(
    state => selectAmountFromCart(state, props),
    [props]
  )
  const amount = useSelector(selectAmountMemo)
  const dispatch = useDispatch()
  const increase = useCallback(() => dispatch(addToCart(id)), [dispatch, id])
  const decrease = useCallback(() => dispatch(removeFromCart(id)), [
    dispatch,
    id,
  ])

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title
            level={4}
            className={styles.title}
            data-automation-id="DISH_NAME"
          >
            {dish.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {dish.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{dish.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-automation-id="AMOUNT">
              {amount}
            </div>
            <Button.Group>
              <Button
                className={styles.button}
                icon="minus"
                onClick={decrease}
                data-automation-id="DECREASE"
              />
              <Button
                className={styles.button}
                icon="plus"
                onClick={increase}
                data-automation-id="INCREASE"
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

Dish.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Dish
