import { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'


const ClockDisplay = () => {
    const { minutes, seconds } = useContext(TimerContext)

    return (
        <>
            <div className="bg-light border border-secondary rounded p-1 py-4 fs-1 mb-3 text-center w-100">
                <p className="m-0 font-monospace">
                    {minutes < 10 && "0"}{minutes}:{seconds < 10 && "0"}{seconds}
                </p>
            </div>
        </>
    )
}

export default ClockDisplay
