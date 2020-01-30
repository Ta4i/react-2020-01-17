import {find, get} from 'lodash'
import {restaurants} from './fixtures'

export const getDish = id => {
  for (const restaurant of restaurants) {
    const result = find(get(restaurant, 'menu', []), dish => dish.id === id)
    if (result) {
      return result
    }
  }
}
