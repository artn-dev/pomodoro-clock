import { TimerContextProvider } from '../contexts/TimerContext'
import ClockOptions from "./ClockOptions"
import ClockDisplay from "./ClockDisplay"
import ConfigureTimeModal from './ConfigureTimeModal'


const Clock = () => {
    return (
        <>
            <TimerContextProvider>
                <div className="container-fluid">
                    <div className="row">
                        <ClockDisplay />
                    </div>
                    <div className="row">
                        <ClockOptions />
                        <ConfigureTimeModal />
                    </div>
                </div>
            </TimerContextProvider>
        </>
    )
}

export default Clock
