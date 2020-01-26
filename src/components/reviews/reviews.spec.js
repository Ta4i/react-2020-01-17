import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import Review from './review'
import {restaurants} from './../../fixtures'

const reviewsMock = restaurants[0].reviews

configure({adapter: new Adapter()})

describe('Reviews', () => {
  it('should render Review components', () => {
    const wrapper = shallow(<Reviews reviews={reviewsMock} />)

    expect(wrapper.find(Review).length).toBe(reviewsMock.length)
  })

  it('should not render Review component when input data undefined', () => {
    const wrapper = shallow(<Reviews />)

    expect(wrapper.find(Review).length).toBe(0)
  })
})
