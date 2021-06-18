const ClockDisplay = ({ minutes, seconds }) => {
    return (
        <>
            <div className="bg-light border border-secondary rounded p-1 fs-1 mb-3 text-center w-100">
                <p className="m-0 font-monospace">{minutes}:{seconds < 10 && "0"}{seconds}</p>
            </div>
        </>
    )
}

export default ClockDisplay
