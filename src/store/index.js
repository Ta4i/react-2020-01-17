import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {generateID} from './middlewares/generateId'

const enhancer = applyMiddleware(logging, generateID)

// export const store = createStore(reducer)
export const store = createStore(reducer, enhancer)
// ONLY FOR DEV
window.store = store
