import { useContext, useState } from "react"
import { TimerContext } from '../contexts/TimerContext'
import TimeSlider from "./TimeSlider"


const ConfigureTimeModal = () => {
    const {
        sessionTime,
        setSessionTime,
        breakTime,
        setBreakTime,
        saveSettings
    } = useContext(TimerContext)

    const [minSession, setMinSession] = useState(Math.floor(sessionTime / 60))
    const [secSession, setSecSession] = useState(sessionTime % 60)
    const [minBreak, setMinBreak] = useState(Math.floor(breakTime / 60))
    const [secBreak, setSecBreak] = useState(breakTime % 60)

    const onSave = () => {
        const newSessionTime = minSession * 60 + secSession
        const newBreakTime = minBreak * 60 + secBreak

        setSessionTime(newSessionTime)
        setBreakTime(newBreakTime)
        saveSettings(newSessionTime, newBreakTime)
    }

    return (
        <>
        <div className="modal fade" id="configureTimeModal" tabIndex="-1" aria-labelledby="configuraTimeModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Configure Time</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <TimeSlider
                            label="Session"
                            minuteValue={minSession}
                            onChangeMin={setMinSession}
                            secondValue={secSession}
                            onChangeSec={setSecSession}
                        />

                        <TimeSlider
                            label="Break"
                            minuteValue={minBreak}
                            onChangeMin={setMinBreak}
                            secondValue={secBreak}
                            onChangeSec={setSecBreak}
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
