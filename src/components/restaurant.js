import React, {Fragment} from 'react'
import Menu from './menu'
import Reviews from './reviews'

function Restaurant({restaurant}) {
  
  return (
    <Fragment>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews}/>
    </Fragment>
  )
}

export default Restaurant