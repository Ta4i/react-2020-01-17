import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import {Col, Row, Spin, Icon} from 'antd'
import Cart from '../cart'
import {connect} from 'react-redux'
import {
  selectDishes,
  selectReviews,
  selectUserList,
} from '../../store/selectors'
import {
  fetchDishes,
  fetchReviews,
  fetchUsers,
} from '../../store/action-creators'

class Restaurant extends Component {
  state = {
    error: null,
  }

  componentDidMount() {
    this.props.fetchDishes && this.props.fetchDishes()
    this.props.fetchReviews && this.props.fetchReviews()
    this.props.fetchUsers && this.props.fetchUsers()
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error})
  }

  render() {
    const {
      restaurant: {id, name, menu},
      dishesLoaded,
      reviewsLoaded,
      usersLoaded,
    } = this.props

    if (!dishesLoaded || !reviewsLoaded || !usersLoaded) {
      const antIcon = <Icon type="loading" style={{fontSize: 48}} spin />
      return (
        <Row type="flex" justify="center" align="center">
          <Spin size="large" indicator={antIcon} tip="Loading..."></Spin>
        </Row>
      )
    }

    return (
      <div>
        <Hero heading={name}>
          {this.state.error ? null : <AverageRating id={id} />}
        </Hero>
        <Row>
          <Col span={18} className={styles.restaurantContent}>
            <Reviews id={id} />
            <Dishes menu={menu} />
          </Col>
          <Col span={6}>
            <Cart />
          </Col>
        </Row>
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    menu: PropTypes.array,
  }),
}

export default connect(
  (state, ownProps) => ({
    dishesLoaded: selectDishes(state).length > 0,
    reviewsLoaded: selectReviews(state, ownProps.restaurant).length > 0,
    usersLoaded: selectUserList(state, ownProps).length > 0,
  }),
  {
    fetchDishes,
    fetchReviews,
    fetchUsers,
  }
)(Restaurant)
