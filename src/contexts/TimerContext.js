import { createContext, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'


export const TimerContext = createContext({})

var countDownTimeout
const defaultSessionTime = 25 * 60
const defaultBreakTime = 5 * 60

export const TimerContextProvider = ({ children }) => {
    const [cookie, setCookie] = useCookies(["sessionTime, breakTime"])

    const [sessionTime, setSessionTime] = useState(
        cookie.sessionTime ? cookie.sessionTime : defaultSessionTime
    )
    const [breakTime, setBreakTime] = useState(
        cookie.breakTime ? cookie.breakTime : defaultBreakTime
    )
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

    const saveSettings = (newSessionTime, newBreakTime) => {
        if (newSessionTime)
            setCookie("sessionTime", newSessionTime, { path: "/" })
        if (newBreakTime)
            setCookie("breakTime", newBreakTime, { path: "/" })
    }

    const handleSessionTimeChange = () => {
        setCurrentTime(sessionTime)
    }

    const handleCurrentTimeChange = () => {
        if (!isRunning) {
            return
        }
    
        if (currentTime == 0) {
            new Audio("/alarm-tone1.wav").play()
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
    }

    const handleIsRunningChange = () => {
        if (isRunning) {
            updateTime()
            return
        }

        clearTimeout(countDownTimeout)
    }

    useEffect(handleSessionTimeChange, [sessionTime])
    useEffect(handleCurrentTimeChange, [currentTime])
    useEffect(handleIsRunningChange, [isRunning])

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
                setBreakTime,
                saveSettings
        }}>
            {children}
        </TimerContext.Provider>
    )
}