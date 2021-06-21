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
    default:
        return state
    }
}

export default ClockReducer
