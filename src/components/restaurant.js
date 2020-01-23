import React, {useMemo} from 'react'
import Menu from './menu'
import Reviews from './reviews'
import {Rate} from 'antd'

function Restaurant(props) {
  const {menu, reviews} = props.restaurant
  const averageRating = useMemo(() => {
    return (
      reviews.reduce((sum, current) => sum + current.rating, 0) / reviews.length
    )
  }, [reviews])

  return (
    <div>
      <Menu menu={menu} />
      <h4>Rating</h4>
      <Rate disabled value={averageRating} />
      <Reviews reviews={reviews} />
    </div>
  )
}

export default Restaurant
