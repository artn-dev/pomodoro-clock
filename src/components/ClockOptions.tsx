import { useDispatch, useSelector } from 'react-redux'
import { start, reset } from '../actions/ClockActions'
import { ClockReducerState } from '../reducers/ClockReducer'


const ClockOptions = () => {
  const isActive = useSelector((state: ClockReducerState) => (state.isActive))
  const dispatch = useDispatch()

  return (
    <>
      <div className="btn-group btn-group-lg" role="group" aria-label="Clock Options">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => { dispatch(reset()) }}
          disabled={!isActive}
        >
          <i className="bi bi-stop-circle"></i>
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#configureTimeModal"
          disabled={isActive}
        >
          <i className="bi bi-gear"></i>
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={() => { dispatch(start()) }}
          disabled={isActive}
        >
          <i className="bi bi-play-circle"></i>
        </button>
      </div>
    </>
  )
}

export default ClockOptions
