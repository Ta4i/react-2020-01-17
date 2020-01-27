import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

const reviewsMock = restaurants[0].reviews

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('should render all reviews', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)
    expect(wrapper.find('div[data-automation-id="REVIEW_CARD"]').length).toBe(
      reviewsMock.length
    )
  })
})
