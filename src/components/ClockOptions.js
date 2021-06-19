import { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'


const ClockOptions = ({ onStart, onCancel, isActive = false }) => {
  const { startClock, resetTime, isRunning } = useContext(TimerContext)

  return (
    <>
      <div className="btn-group btn-group-lg" role="group" aria-label="Clock Options">
        <button
          type="button"
          className="btn btn-danger"
          onClick={resetTime}
          disabled={!isRunning}
        >
          Cancel
        </button>

        <button type="button" className="btn btn-secondary">
          <i className="bi bi-gear"></i>
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={startClock}
          disabled={isRunning}
        >
          Start
        </button>
      </div>
    </>
  )
}

export default ClockOptions
