import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {useDispatch, useSelector} from 'react-redux'
import {addReview} from '../../store/action-creators'

import styles from './review-form.module.css'
import {selectUserByName} from '../../store/selectors/users'

const ReviewForm = ({restaurantId}) => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState(null)
  const [text, setText] = useState(null)
  const [rating, setRating] = useState(0)
  const user = useSelector(state => selectUserByName(state, {name: userName}))

  const handleSubmit = event => {
    event.preventDefault()
    const reviewData = {
      text,
      rating,
    }
    const userData = {
      name: userName,
      id: user ? user.id : null,
    }
    dispatch(addReview(reviewData, userData, restaurantId))
    setUserName(null)
    setText(null)
    setRating(0)
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
              value={userName}
              onChange={event => setUserName(event.target.value)}
            />
            <Input.TextArea
              rows={3}
              size="large"
              value={text}
              onChange={event => setText(event.target.value)}
            />
            <div>
              Rating:
              <Rate value={rating} onChange={value => setRating(value)} />
            </div>
            <Button
              htmlType="submit"
              className={styles.submitButton}
              disabled={!userName}
            >
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

ReviewForm.propTypes = {
  restaurantId: PropTypes.string.isRequired,
}

export default ReviewForm
