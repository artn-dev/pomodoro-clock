import ClockOptions from "./ClockOptions"
import ClockDisplay from "./ClockDisplay"
import ConfigureTimeModal from './ConfigureTimeModal'
import { useSelector, useDispatch } from 'react-redux'
import { update, beginBreak, reset } from '../actions/ClockActions'
import { ClockReducerState } from '../reducers/ClockReducer'
import { useEffect, useState } from 'react'


const Clock = () => {
    const isActive = useSelector((state: ClockReducerState) => (state.isActive))
    const currentTime = useSelector((state: ClockReducerState) => (state.currentTime))
    const sessionIsDone = useSelector((state: ClockReducerState) => (state.sessionIsDone))
    const dispatch = useDispatch()
    const [clockTimeout, setClockTimeout] = useState<NodeJS.Timeout>()

    const updateTime = () => {
        setClockTimeout(
            setTimeout(dispatch, 1000, update())
        )
    }

    const timeUpdateEffect = () => {
        if (!isActive) {
            clearTimeout(clockTimeout)
            return
        }

        if (currentTime >= 0) {
            updateTime()
            return
        }

        if (sessionIsDone) {
            dispatch(reset())
            return
        }

        dispatch(beginBreak())
    }

    useEffect(timeUpdateEffect, [isActive, currentTime, sessionIsDone])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <ClockDisplay />
                </div>
                <div className="row">
                    <ClockOptions />
                    <ConfigureTimeModal />
                </div>
            </div>
        </>
    )
}

export default Clock
