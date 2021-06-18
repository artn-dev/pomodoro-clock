import { useState } from "react"
import ClockOptions from "./ClockOptions"
import ClockDisplay from "./ClockDisplay"

const Clock = () => {
    const [time, setTime] = useState(25 * 60)

    const getMinutes = () => ( Math.floor(time / 60) )
    const getSeconds = () => ( time % 60 )

    return (
        <>
            <div className="card d-flex align-items-center" style={{
                maxWidth: 500,
            }}>
                <div className="card-body w-75 py-5 d-flex flex-column align-items-center">

                    <ClockDisplay minutes={getMinutes()} seconds={getSeconds()} />
                    <ClockOptions />

                </div>
            </div>
        </>
    )
}

export default Clock
