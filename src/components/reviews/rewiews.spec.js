import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {restaurants} from '../../fixtures'
import Reviews from '../reviews'

const reviews = restaurants[0].reviews

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('should render navigation items', function() {
    const wrapper = mount(<Reviews reviews={reviews} />)

    expect(wrapper.find('[data-automation-id="REVIEWS"]').length).toBe(
      reviews.length
    )
  })
})
