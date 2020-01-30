import React from 'react'
import styles from './order-item.module.css'
import {Card, Col, Row, Typography} from 'antd'

function OrderItem(props) {
  const {name, price, amount} = props.dish
  return (
    <Card>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {name}
          </Typography.Title>
          <div className={styles.price}>{price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count}>{amount}</div>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default OrderItem
