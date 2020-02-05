import uuid from 'uuid/v4'

export const idGeneration = store => next => action => {
  action.uuid = uuid()
  next(action)
}
