import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ClockReducerState } from '../reducers/ClockReducer'


const ClockDisplay = () => {
    const currentTime = useSelector((state: ClockReducerState) => (state.currentTime))

    const [minutes, setMinutes] = useState<number>()
    const [seconds, setSeconds] = useState<number>()

    useEffect(() => {
        setMinutes(Math.floor(currentTime / 60))
        setSeconds(currentTime % 60)
    }, [currentTime])

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

