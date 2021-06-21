import { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { TimerContext } from '../contexts/TimerContext'
import { start, reset } from '../actions/ClockActions'


const ClockOptions = () => {
  const { startClock, resetTime, isRunning } = useContext(TimerContext)
  const dispatch = useDispatch()

  return (
    <>
      <div className="btn-group btn-group-lg" role="group" aria-label="Clock Options">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => { dispatch(reset()) }}
          disabled={!isRunning}
        >
          <i className="bi bi-stop-circle"></i>
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
          onClick={() => { dispatch(start()) }}
          disabled={isRunning}
        >
          <i className="bi bi-play-circle"></i>
        </button>
      </div>
    </>
  )
}

export default ClockOptions
