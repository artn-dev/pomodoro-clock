const ClockOptions = ({ onStart, onCancel, isActive = false }) => {
  return (
    <>
      <div className="btn-group btn-group-lg" role="group" aria-label="Clock Options">
        <button
          type="button"
          className="btn btn-danger"
          onClick={onCancel}
          disabled={!isActive}
        >
          Cancel
        </button>

        <button type="button" className="btn btn-secondary">
          <i className="bi bi-gear"></i>
        </button>

        <button type="button" className="btn btn-success" onClick={onStart}>
          Start
        </button>
      </div>
    </>
  )
}

export default ClockOptions
