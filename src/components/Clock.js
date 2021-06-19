import { TimerContextProvider } from '../contexts/TimerContext'
import ClockOptions from "./ClockOptions"
import ClockDisplay from "./ClockDisplay"
import ConfigureTimeModal from './ConfigureTimeModal'


const Clock = () => {
    return (
        <>
            <div className="card d-flex align-items-center border border-secondary border-4" style={{
                maxWidth: 500, minWidth: 330,
            }}>
                <div className="card-body w-75 py-5 d-flex flex-column align-items-center">

                    <TimerContextProvider>
                        <ClockDisplay />
                        <ClockOptions />
                        <ConfigureTimeModal />
                    </TimerContextProvider>

                </div>
            </div>
        </>
    )
}

export default Clock
