import React, {useMemo} from 'react'
import Menu from './menu'
import Reviews from './reviews'
import {Rate, Divider} from 'antd'

const countAvgRating = reviews => {
  const avgRating =
    reviews.reduce((acc, value) => acc + value.rating, 0) / reviews.length
  const roundedToHalf = Math.round(avgRating * 2) / 2
  return roundedToHalf
}

const Restaurant = ({restaurant}) => {
  const {menu, reviews} = restaurant
  const rating = useMemo(() => countAvgRating(reviews), [reviews])

  return (
    <div>
      Restaurant rating: <Rate value={rating} allowHalf disabled />
      <Menu menu={menu} />
      <Divider />
      <Reviews reviews={reviews} />
    </div>
  )
}

export default Restaurant
