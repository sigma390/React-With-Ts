import { createContext } from "react";


//typ timer

type Timer = {
    name:string,
    duration:number
}

// Timer State
type TimerState = {
    isRunning:boolean,
    timers:Timer[]
}
// type ContextValue
type TimersContextValue = TimerState &{
    addTimer:(timeData:Timer)=>void,
    startTimers:()=>void,
    stopTimers:()=>void;
};

const TimersContext = createContext<TimersContextValue | null>(null);