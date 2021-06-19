import { TimerContextProvider } from '../contexts/TimerContext'
import ClockOptions from "./ClockOptions"
import ClockDisplay from "./ClockDisplay"
import ConfigureTimeModal from './ConfigureTimeModal'


const Clock = () => {
    return (
        <>
            <TimerContextProvider>
                <ClockDisplay />
                <ClockOptions />
                <ConfigureTimeModal />
            </TimerContextProvider>
        </>
    )
}

export default Clock
