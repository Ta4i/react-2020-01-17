import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

const reviews = restaurants[0].reviews

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('should render review items if they exist', function() {
    const wrapper = mount(<Reviews reviews={reviews} />)

    expect(
      wrapper.find('[data-automation-id="REVIEWS_CONTAINER"]').length
    ).toBe(reviews.length)
  })

  it('should render nothing if reviews is empty', function() {
    const wrapper = mount(<Reviews reviews={[]} />)

    expect(wrapper.isEmptyRender()).toBe(true)
  })
})
