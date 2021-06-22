import { createContext, useState, useEffect, ReactNode } from 'react'
import { useCookies } from 'react-cookie'


interface TimeContextProps {
    minutes: number
    seconds: number
    isRunning: boolean
    sessionTime: number
    breakTime: number
    startClock: () => void
    resetTime: () => void
    setSessionTime: (arg: number) => void
    setBreakTime: (arg: number) => void
    saveSettings: (arg1: number, arg2: number) => void
    changeSettings: (arg1: number, arg2: number) => void
}

interface TimerContextProviderProps {
    children?: ReactNode
}


export const TimerContext = createContext({} as TimeContextProps)

var countDownTimeout: NodeJS.Timeout

const defaultSessionTime = 25 * 60
const defaultBreakTime = 5 * 60

export const TimerContextProvider = ({ children }: TimerContextProviderProps) => {
    const [cookie, setCookie] = useCookies(["sessionTime, breakTime"])

    const [sessionTime, setSessionTime] = useState<number>(
        cookie.sessionTime ? cookie.sessionTime : defaultSessionTime
    )
    const [breakTime, setBreakTime] = useState<number>(
        cookie.breakTime ? cookie.breakTime : defaultBreakTime
    )
    const [currentTime, setCurrentTime] = useState<number>(sessionTime)
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [sessionIsDone, setSessionIsDone] = useState<boolean>(false)

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

    const saveSettings = (newSessionTime: number, newBreakTime: number) => {
        if (newSessionTime)
            setCookie("sessionTime", newSessionTime, { path: "/" })
        if (newBreakTime)
            setCookie("breakTime", newBreakTime, { path: "/" })
    }

    const changeSettings = (newSessionTime: number, newBreakTime: number) => {
        if (newSessionTime)
            setSessionTime(newSessionTime)
        if (newBreakTime)
            setBreakTime(newBreakTime)
    }

    const handleSessionTimeChange = () => {
        setCurrentTime(sessionTime)
    }

    const handleCurrentTimeChange = () => {
        if (!isRunning) {
            return
        }
    
        if (currentTime == 0) {
            new Audio("/alarm-tone.wav").play()
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
                saveSettings,
                changeSettings
        }}>
            {children}
        </TimerContext.Provider>
    )
}