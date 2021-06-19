import { createContext, useState, useEffect } from 'react'


export const TimerContext = createContext({})

var countDownTimeout

export const TimerContextProvider = ({ children }) => {
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

    return(
        <TimerContext.Provider
            value={{
                getMinutes,
                getSeconds,
                startClock,
                resetTime,
                isRunning
        }}>
            {children}
        </TimerContext.Provider>
    )
}