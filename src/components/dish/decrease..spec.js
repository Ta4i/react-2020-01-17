import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

const dishMock = restaurants[0].menu[0]

Enzyme.configure({adapter: new Adapter()})

describe('Dish', function() {
  it('it should be 0 when decrease 0', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper.find('button[data-automation-id="DECREASE"]').simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('0')
  })

  it('it should decrease when data is  > 0', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .simulate('click')
      .simulate('click')
    wrapper.find('button[data-automation-id="DECREASE"]').simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('1')
  })
  it('it should 0 when data is 0 2(increase and decrease', function() {
    const wrapper = mount(<Dish dish={dishMock} />)

    wrapper.find('button[data-automation-id="INCREASE"]').simulate('click')
    wrapper
      .find('button[data-automation-id="DECREASE"]')
      .simulate('click')
      .simulate('click')
      .simulate('click')

    expect(wrapper.find('[data-automation-id="AMOUNT"]').text()).toBe('0')
  })
})
