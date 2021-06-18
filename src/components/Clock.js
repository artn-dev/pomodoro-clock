import { useState, useEffect } from "react"
import ClockOptions from "./ClockOptions"
import ClockDisplay from "./ClockDisplay"


var countDownTimeout

const Clock = () => {
    const defaultTime = 5

    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(defaultTime)

    const getMinutes = () => ( Math.floor(time / 60) )
    const getSeconds = () => ( time % 60 )

    const startClock = () => {
        setIsRunning(true)
    }

    const resetTime = () => {
        clearTimeout(countDownTimeout)
        setTime(defaultTime)
        setIsRunning(false)
    }

    useEffect(() => {
        if (isRunning && time > 0) {
            countDownTimeout = setTimeout(() => { setTime(time - 1) }, 1000)
        }
    }, [isRunning, time])

    return (
        <>
            <div className="card d-flex align-items-center" style={{
                maxWidth: 500,
            }}>
                <div className="card-body w-75 py-5 d-flex flex-column align-items-center">

                    <ClockDisplay minutes={getMinutes()} seconds={getSeconds()} />
                    <ClockOptions onStart={startClock} onCancel={resetTime} />

                </div>
            </div>
        </>
    )
}

export default Clock
