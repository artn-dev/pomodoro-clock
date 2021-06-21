import { ChangeEvent } from 'react'


interface TimeSliderProps {
    minuteValue: number
    secondValue: number
    label: string
    onChangeMin: (arg: number) => void
    onChangeSec: (arg: number) => void
}


const TimeSlider = ({ minuteValue, onChangeMin, secondValue, onChangeSec, label }: TimeSliderProps) => {
    return (
        <form className="mb-4">
            <h5 className="display-6">{label}</h5>
            <div className="d-flex">
                <label htmlFor="sessionMinuteSlider" className="form-label">Minutes</label>
                <p className="ms-auto border rounded px-2">
                    {minuteValue < 10 && 0}{minuteValue}
                </p>
            </div>
            <input
                type="range"
                className="form-range"
                id="sessionMinuteSlider"
                min="0"
                max="99"
                value={minuteValue}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    onChangeMin(parseInt(event.target.value))
            }}/>

            <div className="d-flex">
                <label htmlFor="sessionSecondSlider" className="form-label">Seconds</label>
                <p className="ms-auto border rounded px-2">
                    {secondValue < 10 && 0}{secondValue}
                </p>
            </div>
            <input
                type="range"
                className="form-range"
                id="sessionSecondSlider"
                value={secondValue}
                min="0"
                max="59"
                onChange={(event) => {
                    onChangeSec(parseInt(event.target.value))
                }}
            />
        </form>
    )
}

export default TimeSlider 
