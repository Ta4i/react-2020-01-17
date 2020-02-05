import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import cx from 'classnames'
import {
  addReviewToList,
  addReviewToRestaurant,
  addUser,
} from '../../store/action-creators'
import styles from './review-form.module.css'
import {selectUsers} from '../../store/selectors'

class ReviewForm extends Component {
  state = {
    id: '',
    userId: '',
    text: '',
    rating: null,
    userName: '',
  }

  onChangeHandler = (event, type) => {
    this.setState({
      userId: this.generateId(),
      id: this.generateId(),
    })

    if (type === 'textArea') {
      this.setState({
        text: event.target.value,
      })
    }
    if (type === 'userName') {
      let name = []
      for (let key in this.props.users) {
        name.push(key[name])
      }
      console.log(name)
      this.setState({
        userName: event.target.value,
      })
    } else if (type === 'rating') {
      this.setState({
        rating: event,
      })
    }
  }

  clearForm = () => {
    this.setState({
      id: '',
      userId: '',
      text: '',
      rating: 0,
      userName: '',
      disable: false,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.persist()
    this.props.addReviewToList({
      id: this.state.id,
      userId: this.state.userId,
      text: this.state.text,
      rating: this.state.rating,
    })
    this.props.addUser({id: this.state.userId, userName: this.state.userName})
    this.props.addReviewToRestaurant({
      reviewId: this.state.id,
      restaurantId: this.props.currentRest,
    })
    this.clearForm()
  }

  generateId = () =>
    ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    )

  render() {
    console.log('users->', this.props.users)
    return (
      <Card className={styles.reviewForm}>
        <Row type="flex" align="middle">
          <Col xs={24} md={18} align="left">
            <Typography.Title className={styles.addReviewTitle} level={4}>
              Leave your review
            </Typography.Title>
            <Form onSubmit={this.handleSubmit}>
              <Input
                required
                placeholder="Your name"
                value={this.state.userName}
                className={cx(styles.inputName)}
                onChange={event => this.onChangeHandler(event, 'userName')}
              />
              <Input.TextArea
                required
                rows={3}
                size="large"
                value={this.state.text}
                onChange={event => this.onChangeHandler(event, 'textArea')}
              />
              <div>
                Rating:{' '}
                <Rate
                  defaultValue={0}
                  onChange={event => this.onChangeHandler(event, 'rating')}
                />
              </div>
              <Button
                htmlType="submit"
                disabled={this.state.disable}
                className={styles.submitButton}
              >
                PUBLISH REVIEW
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    )
  }
}
const mapStateToProps = state => ({
  // reviews: selectReviews(state),
  users: selectUsers(state),
})
const mapDispatchToProps = dispatch => {
  return {
    addReviewToList: val => {
      dispatch(addReviewToList(val))
    },
    addReviewToRestaurant: val => {
      dispatch(addReviewToRestaurant(val))
    },
    addUser: val => {
      dispatch(addUser(val))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
