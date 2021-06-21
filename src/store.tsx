import { createStore } from 'redux'
import ClockReducer from './reducers/ClockReducer'


export const store = createStore(ClockReducer)
