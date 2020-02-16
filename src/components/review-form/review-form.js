import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../custom-hooks/use-input'
import cx from 'classnames'

import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/action-creators'
import translaterDecorator from '../../decorators/translater'

const ReviewForm = ({id, dictionary}) => {
  const [rating, setRating] = useState(0)
  const [name, setName, isValidName, resetName] = useInput()
  const [text, setText, isValidText, resetText] = useInput()
  const dispatch = useDispatch()

  const resetForm = () => {
    resetName()
    resetText()
    setRating(null)
  }
  const handleSubmit = ev => {
    ev.preventDefault()
    dispatch(addReview(name, +rating, text, id))
    resetForm()
  }

  const handleNameChange = setName

  const handleTextChange = setText

  const handleRatingChange = setRating

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            {dictionary.LEAVE_YOUR_REVIEW}
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              value={name}
              onChange={handleNameChange}
              placeholder={dictionary.YOUR_NAME}
              className={cx(
                {
                  [styles.invalid]: !isValidName,
                },
                styles.inputName
              )}
            />
            <Input.TextArea
              value={text}
              onChange={handleTextChange}
              rows={3}
              size="large"
              className={cx({
                [styles.invalid]: !isValidText,
              })}
            />
            <div>
              {dictionary.RATING}:{' '}
              <Rate value={rating} onChange={handleRatingChange} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              {dictionary.PUBLISH_REVIEW.toUpperCase()}
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default translaterDecorator(ReviewForm)
