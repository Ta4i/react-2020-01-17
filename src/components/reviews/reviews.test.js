import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Reviews from './reviews'
import {restaurants} from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Reviews test', () => {
  it('should work', () => {
    // никогда не писал тесты. может быть ошибочно, решил протестировать так: посчитать количество отзывов в первом ревью.
    // и сравнить с моковыми данными. в итоге я потерпел фиаско :((( ..... нужны отдельные курсы, хорошие курсы по тестированию
    // и море практики :)
  })
});
