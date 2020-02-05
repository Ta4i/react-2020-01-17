import {createStore, applyMiddleware} from 'redux'
import {reducer} from './reducers'
import {logging} from './middlewares/logging'
import {reviewIdGeneration} from './middlewares/review-id-generation'
import {userIdGeneration} from './middlewares/user-id-generation'

const enhancer = applyMiddleware(logging, reviewIdGeneration, userIdGeneration)

export const store = createStore(reducer, enhancer)

// ONLY FOR DEV
window.store = store
