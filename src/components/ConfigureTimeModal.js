import { useContext, useState } from "react"
import { TimerContext } from '../contexts/TimerContext'


const SessionTimeSlider = ({
    minuteValue, onChangeMin, secondValue, onChangeSec
}) => {
    return (
        <form>
            <div className="d-flex">
                <label htmlFor="sessionMinuteSlider" className="form-label">Minutes</label>
                <p className="ms-auto border rounded px-2">
                    {minuteValue < 10 && 0}{minuteValue}
                </p>
            </div>
            <input
                type="range"
                className="form-range"
                id="sessionMinuteSlider"
                value={minuteValue}
                onChange={(event) => {
                    onChangeMin(parseInt(event.target.value))
            }}/>

            <div className="d-flex">
                <label htmlFor="sessionSecondSlider" className="form-label">Seconds</label>
                <p className="ms-auto border rounded px-2">
                    {secondValue < 10 && 0}{secondValue}
                </p>
            </div>
            <input
                type="range"
                className="form-range"
                id="sessionSecondSlider"
                value={secondValue}
                onChange={(event) => {
                    onChangeSec(parseInt(event.target.value))
                }}
            />
        </form>
    )
}

const ConfigureTimeModal = () => {
    const { sessionTime, setSessionTime } = useContext(TimerContext)
    const [minSession, setMinSession] = useState(Math.floor(sessionTime / 60))
    const [secSession, setSecSession] = useState(sessionTime % 60)

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
                    
                        <SessionTimeSlider
                            minuteValue={minSession}
                            onChangeMin={setMinSession}
                            secondValue={secSession}
                            onChangeSec={setSecSession}
                        />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                setSessionTime(minSession * 60 + secSession)
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
