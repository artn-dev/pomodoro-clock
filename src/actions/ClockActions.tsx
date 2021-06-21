import { START, UPDATE, RESET, BEGIN_BREAK, CHANGE_TIME_CONFIG, SAVE_TIME_CONFIG } from "./Types";


export const start  = () => ({ type: START })
export const update = () => ({ type: UPDATE })
export const reset  = () => ({ type: RESET })
export const beginBreak = () => ({ type: BEGIN_BREAK})
export const changeTimeConfig = (session: number, break_: number) => ({
    type: CHANGE_TIME_CONFIG,
    session: session + 1,
    break: break_ + 1
})
export const saveTimeConfig = (session: number, break_: number) => ({
    type: SAVE_TIME_CONFIG,
    session: session + 1,
    break: break_ + 1
})
