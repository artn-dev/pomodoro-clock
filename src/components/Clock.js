import { useState, useEffect } from "react"
import ClockOptions from "./ClockOptions"
import ClockDisplay from "./ClockDisplay"


var countDownTimeout

const Clock = () => {
    const sessionTime = 5
    const breakTime = 3

    const [isRunning, setIsRunning] = useState(false)
    const [sessionIsDone, setSessionIsDone] = useState(false)
    const [time, setTime] = useState(sessionTime)

    const getMinutes = () => ( Math.floor(time / 60) )
    const getSeconds = () => ( time % 60 )

    const startClock = () => {
        setIsRunning(true)
    }

    const resetTime = () => {
        clearTimeout(countDownTimeout)
        setTime(sessionTime)
        setIsRunning(false)
        setSessionIsDone(false)
    }

    useEffect(() => {

        if (!isRunning)
            return

        if (time > 0) {
            countDownTimeout = setTimeout(() => { setTime(time - 1) }, 1000)
            return
        } 

        if (!sessionIsDone) {
            setTimeout(() => {
                setTime(breakTime)
                setSessionIsDone(true)
            }, 1000)
            return
        }

        resetTime()

    }, [isRunning, time, sessionIsDone])

    return (
        <>
            <div className="card d-flex align-items-center" style={{
                maxWidth: 500,
            }}>
                <div className="card-body w-75 py-5 d-flex flex-column align-items-center">

                    <ClockDisplay minutes={getMinutes()} seconds={getSeconds()} />
                    <ClockOptions onStart={startClock} onCancel={resetTime} isActive={isRunning} />

                </div>
            </div>
        </>
    )
}

export default Clock
