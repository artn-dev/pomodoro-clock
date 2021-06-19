import { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'


const ClockOptions = () => {
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
          <i class="bi bi-stop-circle"></i>
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#configureTimeModal"
          disabled={isRunning}
        >
          <i className="bi bi-gear"></i>
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={startClock}
          disabled={isRunning}
        >
          <i class="bi bi-play-circle"></i>
        </button>
      </div>
    </>
  )
}

export default ClockOptions
