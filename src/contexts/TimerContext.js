import { createContext, useState, useEffect } from 'react'


export const TimerContext = createContext({})

var countDownTimeout
const defaultSessionTime = 25 * 60
const defaultBreakTime = 5 * 60

export const TimerContextProvider = ({ children }) => {
    const [sessionTime, setSessionTime] = useState(defaultSessionTime)
    const [breakTime, setBreakTime] = useState(defaultBreakTime)
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

    const updateTime = () => {
        countDownTimeout = setTimeout(() => {
            setCurrentTime(currentTime - 1)
        }, 1000)
    }

    useEffect(() => {
        setCurrentTime(sessionTime)

    }, [sessionTime])

    useEffect(() => {
        if (!isRunning) {
            return
        }

        if (currentTime >= 0) {
            updateTime()
            return
        } 
        
        if(sessionIsDone) {
            resetTime()
            return
        } 

        setCurrentTime(breakTime - 1)
        setSessionIsDone(true)

    }, [currentTime])

    useEffect(() => {
        if (isRunning) {
            updateTime()
            return
        }

        clearTimeout(countDownTimeout)

    }, [isRunning])

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