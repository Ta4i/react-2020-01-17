import React from 'react'
import {Rate, Card, Col} from 'antd'

const Review = ({rating, user, text}) => (
  <Col span={8}>
    <Card title={user} bordered={false} style={{width: 300}}>
      <Col>{text}</Col>
      <Col>
        <Rate disabled allowHalf defaultValue={rating} />
        <span>{rating} / 5</span>
      </Col>
    </Card>
  </Col>
)

export default Review
