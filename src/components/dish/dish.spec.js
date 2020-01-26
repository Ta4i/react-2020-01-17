import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

const dishMock = restaurants[0].menu[0]

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

  it('should decrease cart amount when click on minus button', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .simulate('click')
      .simulate('click')
    wrapper.find('button[data-automation-id="DECREASE"]').simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('1')
  })

  it('should not decrease cart amount below zero', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper.find('button[data-automation-id="DECREASE"]').simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('0')
  })
})
