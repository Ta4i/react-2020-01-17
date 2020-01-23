import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Restaurant from "./restaurant";
import {Card, Layout} from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  )
  const activeRestaurant = useMemo(() => {
    return props.restaurants.find(
      restaurant => restaurant.id === activeRestaurantId
    )
  }, [activeRestaurantId, props.restaurants])
  return (
    <div>
        <Layout>
            <Layout>
                <Sider style={{ width: 500 }} >
                    <RestaurantsNavigation
                        restaurants={props.restaurants}
                        onRestaurantChange={setActiveRestaurant}/>
                </Sider>
                <Content>
                    <Restaurant restaurant={activeRestaurant}/>
                </Content>
            </Layout>
        </Layout>



    </div>
  )
}

export default Restaurants
