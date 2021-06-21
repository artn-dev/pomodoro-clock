import { useContext } from 'react'
import { TimerContext } from '../contexts/TimerContext'


const ClockDisplay = () => {
    const { minutes, seconds } = useContext(TimerContext)

    const fixDigits = (time: number) => {
        if (time < 0)
            return "00"
        return (time < 10 ? "0" : "") + time
    }

    return (
        <>
            <div
                className="bg-light border border-dark border-4 rounded p-1 py-4 fs-1 mb-3 text-center"
                style={{
                    minWidth: 300
            }}>
                <p className="m-0 font-monospace">
                    {fixDigits(minutes)}:{fixDigits(seconds)}
                </p>
            </div>
        </>
    )
}

export default ClockDisplay
