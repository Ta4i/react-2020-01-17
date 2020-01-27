import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import Review from './review'
import {restaurants} from '../../fixtures'

const reviewsMock = restaurants[0].reviews
const emptyMock = []

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  describe('Reviews', function() {
    it(`should render ${reviewsMock.length} reviews`, function() {
      const wrapper = mount(<Reviews reviews={reviewsMock} />)

      expect(wrapper.find(Review).getElements().length).toBe(reviewsMock.length)
    })
    it(`should render ${emptyMock.length} reviews`, function() {
      const wrapper = mount(<Reviews reviews={emptyMock} />)

      expect(wrapper.find(Review).getElements().length).toBe(0)
    })
  })
})
