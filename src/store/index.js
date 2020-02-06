import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {addNewReview} from './middlewares/add-review'

const enhancer = applyMiddleware(logging, addNewReview)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
