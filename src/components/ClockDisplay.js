import { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'


const ClockDisplay = () => {
    const { getMinutes, getSeconds } = useContext(TimerContext)

    return (
        <>
            <div className="bg-light border border-secondary rounded p-1 fs-1 mb-3 text-center w-100">
                <p className="m-0 font-monospace">{getMinutes()}:{getSeconds() < 10 && "0"}{getSeconds()}</p>
            </div>
        </>
    )
}

export default ClockDisplay
