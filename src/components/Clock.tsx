import { TimerContextProvider } from '../contexts/TimerContext'
import ClockOptions from "./ClockOptions"
import ClockDisplay from "./ClockDisplay"
import ConfigureTimeModal from './ConfigureTimeModal'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../actions/ClockActions'
import { ClockReducerState } from '../reducers/ClockReducer'
import { useEffect, useState } from 'react'


const Clock = () => {
    const isActive = useSelector((state: ClockReducerState) => (state.isActive))
    const currentTime = useSelector((state: ClockReducerState) => (state.currentTime))
    const dispatch = useDispatch()
    const [clockTimeout, setClockTimeout] = useState<NodeJS.Timeout>()

    const updateTime = () => {
        setClockTimeout(
            setTimeout(dispatch, 1000, update())
        )
    }

    useEffect(() => {
        if (!isActive) {
            clearTimeout(clockTimeout)
            return
        }

        updateTime()

    }, [isActive, currentTime])

    return (
        <>
            <TimerContextProvider>
                <div className="container-fluid">
                    <div className="row">
                        <ClockDisplay />
                    </div>
                    <div className="row">
                        <ClockOptions />
                        <ConfigureTimeModal />
                    </div>
                </div>
            </TimerContextProvider>
        </>
    )
}

export default Clock
