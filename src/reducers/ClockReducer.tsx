import { START, UPDATE, RESET, BEGIN_BREAK, CHANGE_TIME_CONFIG } from '../actions/Types'
import Cookie from 'js-cookie'


export interface ClockReducerState {
    currentTime: number
    sessionTime: number
    breakTime: number
    isActive: boolean
    sessionIsDone: boolean
}


export const getInitialState = () => {
    const defaultSession = 25 * 60
    const defaultBreak = 25 * 60

    const savedSession = Cookie.get('sessionTime')
    const savedBreak = Cookie.get('breakTime')

    return {
        currentTime: savedSession ? savedSession : defaultSession,
        sessionTime: savedSession ? savedSession : defaultSession,
        breakTime: savedBreak ? savedBreak : defaultBreak,
        isActive: false,
        sessionIsDone: false
    }
}


const ClockReducer = (state: ClockReducerState, action) => {
    switch (action.type) {
    case START:
        return { ...state, isActive: true }
    case UPDATE:
        return { ...state, currentTime: state.currentTime - 1}
    case RESET:
        return { ...state, currentTime: state.sessionTime, isActive: false, sessionIsDone: false }
    case BEGIN_BREAK:
        return { ...state, currentTime: state.breakTime - 1, sessionIsDone: true }
    case CHANGE_TIME_CONFIG:
        return { ...state, sessionTime: action.session, breakTime: action.break }
    default:
        return state
    }
}

export default ClockReducer
