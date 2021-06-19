import { createContext, useState, useEffect } from 'react'


export const TimerContext = createContext({})

var countDownTimeout

export const TimerContextProvider = ({ children }) => {
    const [sessionTime, setSessionTime] = useState(5)
    const [breakTime, setBreakTime] = useState(3)
    const [currentTime, setCurrentTime] = useState(sessionTime)
    const [isRunning, setIsRunning] = useState(false)
    const [sessionIsDone, setSessionIsDone] = useState(false)

    const minutes = Math.floor(currentTime / 60)
    const seconds = currentTime % 60

    const startClock = () => {
        setIsRunning(true)
    }

    const resetTime = () => {
        clearTimeout(countDownTimeout)
        setCurrentTime(sessionTime)
        setIsRunning(false)
        setSessionIsDone(false)
    }

    useEffect(() => {

        if (!isRunning)
            return

        if (currentTime > 0) {
            countDownTimeout = setTimeout(() => { setCurrentTime(currentTime - 1) }, 1000)
            return
        } 

        if (!sessionIsDone) {
            setTimeout(() => {
                setCurrentTime(breakTime)
                setSessionIsDone(true)
            }, 1000)
            return
        }

        resetTime()

    }, [isRunning, currentTime, sessionIsDone])

    return(
        <TimerContext.Provider
            value={{
                minutes,
                seconds,
                startClock,
                resetTime,
                isRunning,
                sessionTime,
                setSessionTime,
                breakTime,
                setBreakTime
        }}>
            {children}
        </TimerContext.Provider>
    )
}