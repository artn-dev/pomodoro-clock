import { ChangeEvent, useState } from 'react'


interface TimeSliderProps {
    label: string
    time:number
    onChange: (arg: number) => void
}


const TimeSlider = ({ time, onChange, label }: TimeSliderProps) => {
    const [minutes, setminutes] = useState<number>(Math.floor(time / 60))
    const [seconds, setseconds] = useState<number>(time % 60)

    return (
        <form className="mb-4">
            <h5 className="display-6">{label}</h5>
            <div className="d-flex">
                <label htmlFor="sessionMinuteSlider" className="form-label">Minutes</label>
                <p className="ms-auto border rounded px-2">
                    {minutes < 10 && 0}{minutes}
                </p>
            </div>
            <input
                type="range"
                className="form-range"
                id="sessionMinuteSlider"
                min="0"
                max="99"
                value={minutes}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const newmin = parseInt(event.target.value)
                    setminutes(newmin)
                    onChange(newmin * 60 + seconds)
            }}/>

            <div className="d-flex">
                <label htmlFor="sessionSecondSlider" className="form-label">Seconds</label>
                <p className="ms-auto border rounded px-2">
                    {seconds < 10 && 0}{seconds}
                </p>
            </div>
            <input
                type="range"
                className="form-range"
                id="sessionSecondSlider"
                value={seconds}
                min="0"
                max="59"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const newSec = parseInt(event.target.value)
                    setseconds(newSec)
                    onChange(minutes * 60 + newSec)
                }}
            />
        </form>
    )
}


export default TimeSlider 
