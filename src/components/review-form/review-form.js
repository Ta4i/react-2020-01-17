import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useCallback, useState} from 'react'
import {connect} from 'react-redux'
import cx from 'classnames'

import styles from './review-form.module.css'
import {addReview} from '../../store/action-creators'
import {useInput} from '../../custom-hooks/use-input'

const ReviewForm = ({id, addReview}) => {
  const handleSubmit = event => {
    event.preventDefault()
    event.persist()
    addReview({
      restaurantId: id,
      userName: name,
      text: text,
      rating: +rating,
    })
    clearForm()
  }

  const [name, handleUserNameChange, clearNameValue] = useInput('')
  const [text, handleTextReviewChange, clearTextValue] = useInput('')
  const [rating, setRating] = useState(0)

  const handleRating = useCallback(value => setRating(value), [setRating])

  const clearForm = function() {
    clearNameValue()
    clearTextValue()
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
              value={name}
              onChange={handleUserNameChange}
            />
            <Input.TextArea
              rows={3}
              size="large"
              value={text}
              onChange={handleTextReviewChange}
            />
            <div>
              Rating: <Rate value={rating} onChange={handleRating} />
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

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = {
  addReview: addReview,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
