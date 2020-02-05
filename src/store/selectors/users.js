import {createSelector} from 'reselect'
import {selectId, selectName} from './common'
import {find} from 'lodash'

export const selectUsers = state => state.users

export const selectUserById = createSelector(
  selectUsers,
  selectId,
  (users, id) => {
    return users[id]
  }
)

export const selectUserByName = createSelector(
  selectUsers,
  selectName,
  (users, name) => {
    return find(users, {name})
  }
)
