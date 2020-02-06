import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import cx from 'classnames'
import {publishReview} from '../../store/action-creators'

import styles from './review-form.module.css'
import {selectRestaurantId} from '../../store/selectors'
import {useSelector, useDispatch} from 'react-redux'

const ReviewForm = () => {
  const restaurantId = useSelector(state => selectRestaurantId(state))
  const [nameValue, setNameValue] = useState('')
  const [textValue, setTextValue] = useState('')
  const [rateValue, setRateValue] = useState(0)

  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    return (
      dispatch(
        publishReview({
          restaurantId,
          user: nameValue,
          comment: textValue,
          rate: rateValue,
        })
      ),
      [dispatch, nameValue, rateValue, restaurantId, textValue]
    )
  }

  const onTextAreaChange = e => {
    setTextValue(e.target.value)
  }

  const onRateChange = value => {
    setRateValue(value)
  }

  const onInputBlur = e => {
    setNameValue(e.target.value)
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Your name"
              className={cx(styles.inputName)}
              onBlur={onInputBlur}
            />
            <Input.TextArea rows={3} size="large" onChange={onTextAreaChange} />
            <div>
              Rating: <Rate value={rateValue} onChange={onRateChange} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default ReviewForm
