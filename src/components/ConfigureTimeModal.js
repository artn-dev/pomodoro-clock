import { useContext, useState } from "react"
import { TimerContext } from '../contexts/TimerContext'


const SessionTimeSlider = () => {
    const { sessionTime, setSessionTime } = useContext(TimerContext)
    const [minutes, setMinutes] = useState(Math.floor(sessionTime / 60))
    const [seconds, setSeconds] = useState(sessionTime % 60)

    return (
        <form>
            <div className="d-flex">
                <label htmlFor="sessionMinuteSlider" className="form-label">Minutes</label>
                <p className="ms-auto border rounded px-2">
                    {minutes < 10 && 0}{minutes}
                </p>
            </div>
            <input
                type="range"
                className="form-range"
                id="sessionMinuteSlider"
                value={minutes}
                onChange={(event) => {
                    setMinutes(event.target.value)
            }}/>

            <div className="d-flex">
                <label htmlFor="sessionSecondSlider" className="form-label">Seconds</label>
                <p className="ms-auto border rounded px-2">
                    {seconds < 10 && 0}{seconds}
                </p>
            </div>
            <input
                type="range"
                className="form-range"
                id="sessionSecondSlider"
                value={seconds}
                onChange={(event) => {
                    setSeconds(event.target.value)
                }}
            />
        </form>
    )
}

const ConfigureTimeModal = () => {
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
                    
                        <SessionTimeSlider />
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
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
