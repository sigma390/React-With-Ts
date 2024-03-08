import { createContext, useContext } from "react";


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

export const TimersContext = createContext<TimersContextValue | null>(null);



export function useTimersContext(){
    const timerCtx = useContext(TimersContext);
    if (timerCtx==null) {
        throw new Error('Thats not possible!!!');
    }
    return timerCtx;
}



// type for TimerContextValue 
type TimerContextProviderProps = {
    children:ReactNode
}

export default function TimersContextProvider({children}:TimerContextProviderProps){
    //centralised data

    const ctx:TimersContextValue = {
        timers:[],
        isRunning:false,
        addTimer(timerData){
            //..
        },
        startTimers() {
            
        },
        stopTimers() {
            
        },

    }
    return(
        // context object.Provider 
        <TimersContext.Provider value={ctx} >{children}</TimersContext.Provider>
    )
};