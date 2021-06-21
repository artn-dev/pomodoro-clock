import { START, UPDATE, RESET } from '../actions/Types'


export interface ClockReducerState {
    currentTime: number
    sessionTime: number
    breakTime: number
    isActive: boolean
    sessionIsDone: boolean
}

const initialState = {
    currentTime: 15 * 60,
    sessionTime: 25 * 60,
    breakTime: 5 * 60,
    isActive: false,
    sessionIsDone: false
}

const ClockReducer = (state: ClockReducerState = initialState, action) => {
    switch (action.type) {
    case START:
        return { ...state, isActive: true }
    case UPDATE:
        return { ...state, currentTime: state.currentTime - 1}
    case RESET:
        return { ...state, currentTime: state.sessionTime, isActive: false }
    default:
        return state
    }
}

export default ClockReducer
