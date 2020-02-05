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
    text: '',
    rating: null,
    userName: '',
    restaurantId: '',
  }

  onChangeHandler = (event, type) => {
    if (type === 'textArea') {
      this.setState({
        text: event.target.value,
      })
    }
    if (type === 'userName') {
      this.setState({
        userName: event.target.value,
        restaurantId: this.props.currentRest,
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
    this.props.addReviewToList(this.state)
    this.props.addUser(this.state)
    this.props.addReviewToRestaurant(this.state)
    this.clearForm()
  }

  render() {
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
