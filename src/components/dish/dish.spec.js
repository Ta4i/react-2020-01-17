import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

const dishMock = restaurants[0].menu[0]

Enzyme.configure({adapter: new Adapter()})

describe('Dish', function() {
  it('should increase cart amount when click on plus button', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .simulate('click')
      .simulate('click')
      .simulate('click')
      .simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('4')
  })

  describe('When click on minus button', function() {
    const wrapper = mount(<Dish dish={dishMock} />)
    const increaseButton = wrapper.find('button[data-automation-id="INCREASE"]')
    const decreaseButton = wrapper.find('button[data-automation-id="DECREASE"]')
    const amount = wrapper.find('[data-automation-id="AMOUNT"]')

    it('should leave card amount as 0 if it was 0', function() {
      decreaseButton.simulate('click')
      decreaseButton.simulate('click')
      expect(amount.text()).toBe('0')
    })

    it('should decrease card amount if it was more than 0', function() {
      increaseButton.simulate('click')
      increaseButton.simulate('click')
      decreaseButton.simulate('click')
      expect(amount.text()).toBe('1')
    })
  })
})
