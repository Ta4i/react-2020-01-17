import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import Review from './review'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

const restaurantMock = restaurants[0]

describe('Reviews', function() {
  it('should render correct number of reviews when input array not empty', function() {
    const wrapper = mount(<Reviews reviews={restaurantMock.reviews} />)

    expect(wrapper.find(Review).getElements().length).toBe(
      restaurantMock.reviews.length
    )
  })

  it('should render nothing if input array is empty', function() {
    const wrapper = mount(<Reviews reviews={[]} />)

    expect(wrapper.isEmptyRender()).toBe(true)
  })

  it('should render nothing if input array not passed', function() {
    const wrapper = mount(<Reviews />)

    expect(wrapper.isEmptyRender()).toBe(true)
  })
})
