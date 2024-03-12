import { type ReactNode, createContext, useContext, useReducer } from "react";


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

//initial state for use reducer hook

const initialState:TimerState={
    isRunning:true,
    timers:[]
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

// Action Props will be of type literal
// action is message we are sending with dispatch

type Action = {
    type: 'ADD_TIMER' | 'START_TIMER' | 'STOP_TIMER'
}




// reducer 

function timersReducer(state:TimerState,action:Action){

    if (action.type==='START_TIMER') {
        
    }



}








export default function TimersContextProvider({children}:TimerContextProviderProps){
    
    //useReducer Hook
    const [timerState,dispatch] = useReducer(timersReducer, initialState);



    
    //centralised data

    const ctx:TimersContextValue = {
        timers:[],
        isRunning:false,
        addTimer(timerData){
            dispatch({type:'ADD_TIMER'});
            //..
        },
        startTimers() {
            dispatch({type:'START_TIMER'});
            
        },
        stopTimers() {
            dispatch({type:'STOP_TIMER'});
            
        },

    }
    return(
        // context object.Provider 
        <TimersContext.Provider value={ctx} >{children}</TimersContext.Provider>
    )
};