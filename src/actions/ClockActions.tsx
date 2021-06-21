import { START, UPDATE, RESET, CHANGE_SESSION } from "./Types";


export const start  = () => ({ type: START })
export const update = () => ({ type: UPDATE })
export const reset  = () => ({ type: RESET })
export const changeSessionTime = (newTime: number) => ({ type: CHANGE_SESSION  , time: newTime })
