import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {reviewIdGenerator} from './middlewares/review-id-generator'
import {userIdGenerator} from './middlewares/user-id-generator'

const enhancer = applyMiddleware(logging, reviewIdGenerator, userIdGenerator)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
