import {createSelector} from 'reselect'
import {selectId} from './common'

export const selectDishes = state => state.dishes

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => {
    return dishes[id]
  }
)
