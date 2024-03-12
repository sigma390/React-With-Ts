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



//Right way

type StartTimersAction = {
    type:'START_TIMERS'
}


type StopTimersAction = {
    type:'STOP_TIMERS'
}


type AddTimersAction = {
    type:'ADD_TIMER';
    payload:Timer // to create object
}








//Wrong wayy
type Action = StartTimersAction | StopTimersAction | AddTimersAction;







// reducer 

function timersReducer(state:TimerState,action:Action){

    if (action.type==='START_TIMERS') {
        return {
            ...state,
            isRunning:true
        }
    }
    if (action.type==='STOP_TIMERS') {
        return {
            ...state,
            isRunning:false
        }
    }
    if (action.type==='ADD_TIMER') {
        return {
            ...state,
            timers :[
                ...state.timers,
                {
                    name:action.payload.name,
                    duration:action.payload.duration
                }
            ]
        }
    }




}








export default function TimersContextProvider({children}:TimerContextProviderProps){
    
    //useReducer Hook
    const [timerState,dispatch] = useReducer(timersReducer, initialState);



    
    //centralised data

    const ctx:TimersContextValue = {
        timers:timerState.timers,
        isRunning:timerState.isRunning,
        addTimer(timerData){
            dispatch({type:'ADD_TIMER', payload:timerData});
        },
        startTimers() {
            dispatch({type:'START_TIMERS'});
            
        },
        stopTimers() {
            dispatch({type:'STOP_TIMERS'});
            
        },

    }
    return(
        // context object.Provider 
        <TimersContext.Provider value={ctx} >{children}</TimersContext.Provider>
    )
};