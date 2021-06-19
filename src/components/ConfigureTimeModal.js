import { useContext, useState } from "react"
import { TimerContext } from '../contexts/TimerContext'
import TimeSlider from "./TimeSlider"


const ConfigureTimeModal = () => {
    const {
        sessionTime,
        setSessionTime,
        breakTime,
        setBreakTime
    } = useContext(TimerContext)

    const [minSession, setMinSession] = useState(Math.floor(sessionTime / 60))
    const [secSession, setSecSession] = useState(sessionTime % 60)
    const [minBreak, setMinBreak] = useState(Math.floor(breakTime / 60))
    const [secBreak, setSecBreak] = useState(breakTime % 60)

    return (
        <>
        <div
            className="modal fade"
            id="configureTimeModal"
            tabIndex="-1"
            aria-labelledby="configuraTimeModal"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Configure Time</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">

                        <TimeSlider
                            minuteValue={minSession}
                            onChangeMin={setMinSession}
                            secondValue={secSession}
                            onChangeSec={setSecSession}
                        />

                        <TimeSlider
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
                            onClick={() => {
                                setSessionTime(minSession * 60 + secSession)
                                setBreakTime(minBreak * 60 + secBreak)
                            }}
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
