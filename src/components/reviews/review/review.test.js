import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Review from './review'
import {Rate} from 'antd'
import {restaurants} from '../../../fixtures'

Enzyme.configure({adapter: new Adapter()})

const reviewMock = restaurants[0].reviews[0]

describe('Review', function() {
  it('should contain user name text', function() {
    const wrapper = mount(<Review review={reviewMock} />)

    expect(wrapper.text()).toContain(reviewMock.user)
  })

  it('should contain review text', function() {
    const wrapper = mount(<Review review={reviewMock} />)

    expect(wrapper.text()).toContain(reviewMock.text)
  })

  it('should contain Rate component with correct prop', function() {
    const wrapper = mount(<Review review={reviewMock} />)

    expect(wrapper.find(Rate).prop('value')).toBe(reviewMock.rating)
  })

  it('should render nothing if user name, text or value not passed', function() {
    expect(
      mount(
        <Review review={{user: reviewMock.user, text: reviewMock.text}} />
      ).isEmptyRender()
    ).toBe(true)
    expect(
      mount(
        <Review review={{user: reviewMock.user, value: 4}} />
      ).isEmptyRender()
    ).toBe(true)
    expect(
      mount(
        <Review review={{text: reviewMock.text, value: 4}} />
      ).isEmptyRender()
    ).toBe(true)
  })

  it('should render not null if rating is 0 (falsy)', function() {
    expect(
      mount(
        <Review
          review={{user: reviewMock.user, text: reviewMock.text, rating: 0}}
        />
      ).isEmptyRender()
    ).toBe(false)
  })
})
