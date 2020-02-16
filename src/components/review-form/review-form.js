import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState, useContext, useMemo} from 'react'
import useInput from '../../custom-hooks/use-input'
import cx from 'classnames'
import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/action-creators'
import translations from '../../translations/components/review-form'
import LanguageContext from '../../contexts/language'

const ReviewForm = ({id}) => {
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

  const {locale} = useContext(LanguageContext)
  const localizedContent = useMemo(() => translations[locale], [locale])

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            {localizedContent.title}
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              value={name}
              onChange={setName}
              placeholder={localizedContent.namePlaceHolder}
              className={cx(
                {
                  [styles.invalid]: !isValidName,
                },
                styles.inputName
              )}
            />
            <Input.TextArea
              value={text}
              onChange={setText}
              rows={3}
              size="large"
              className={cx({
                [styles.invalid]: !isValidText,
              })}
            />
            <div>
              {localizedContent.rating}:{' '}
              <Rate value={rating} onChange={setRating} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              {localizedContent.publishReview}
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default ReviewForm
