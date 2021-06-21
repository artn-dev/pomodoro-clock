import { useContext, useState } from "react"
import { TimerContext } from '../contexts/TimerContext'
import TimeSlider from "./TimeSlider"
import { ClockReducerState } from "../reducers/ClockReducer"
import { useSelector, useDispatch } from "react-redux"
import { changeSessionTime } from "../actions/ClockActions"


const ConfigureTimeModal = () => {
    const {
        breakTime,
        setBreakTime,
        saveSettings
    } = useContext(TimerContext)

    const sessionTime = useSelector((state: ClockReducerState) => (state.sessionTime))
    const dispatch = useDispatch()

    const [inSessionTime, setInSessionTime] = useState<number>(sessionTime)
    const [inBreakTime, setInBreakTime] = useState<number>(breakTime)

    const onSave = () => {
        dispatch(changeSessionTime(inSessionTime))
        setBreakTime(inBreakTime)
        saveSettings(inSessionTime, inBreakTime)
    }

    return (
        <>
        <div className="modal fade" id="configureTimeModal" tabIndex={-1} aria-labelledby="configuraTimeModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Configure Time</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <TimeSlider
                            label="Session"
                            time={inSessionTime}
                            onChange={setInSessionTime}
                        />

                        <TimeSlider
                            label="Break"
                            time={inBreakTime}
                            onChange={setInBreakTime}
                        />

                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={onSave}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ConfigureTimeModal 
