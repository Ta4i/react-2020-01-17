import React from 'react'
import {Rate, Card, Col, Row} from 'antd'
import './review.css'

const Review = ({rating, user, text}) => (
  <Row>
    <Card title={user} bordered={false} className="review-card">
      <Col>{text}</Col>
      <Col>
        <Rate disabled allowHalf defaultValue={rating} />
        <span>{rating} / 5</span>
      </Col>
    </Card>
  </Row>
) //

export default Review
