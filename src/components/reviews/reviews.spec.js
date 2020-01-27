import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

const reviewsMock = restaurants[0].reviews

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('should display correct amount of reviews', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)
    expect(wrapper.find('[data-automation-id="REVIEW"]')).to.have.lengthOf(
      reviewsMock.length
    )
  })

  it('should display review author', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)
    expect(
      wrapper
        .find('[data-automation-id="REVIEW"]')
        .first()
        .find('[data-automation-id="USER"]')
    ).to.equal(reviewsMock[0].user)
  })

  it('should display review text', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)
    expect(
      wrapper
        .find('[data-automation-id="REVIEW"]')
        .first()
        .find('[data-automation-id="TEXT"]')
    ).to.equal(reviewsMock[0].text)
  })

  it('should display review rating', function() {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)
    expect(
      wrapper
        .find('[data-automation-id="REVIEW"]')
        .first()
        .find('[data-automation-id="RATING"]')
    ).to.equal(reviewsMock[0].rating)
  })
})
