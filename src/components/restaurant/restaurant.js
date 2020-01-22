import React from 'react'
import Menu from '../menu'
import Reviews from '../reviews'
import {Layout} from 'antd'
import './restaurant.css'

const {Content} = Layout

const Restaurant = ({activeRestaurant}) => (
  <React.Fragment>
    <Content>
      <Menu {...activeRestaurant} />
    </Content>
    <div className="restaurant_reviews">
      <Reviews {...activeRestaurant} />
    </div>
  </React.Fragment>
)
export default Restaurant
