import { createStore } from 'redux'
import ClockReducer, { getInitialState} from './reducers/ClockReducer'


export const store = createStore(ClockReducer, getInitialState())
