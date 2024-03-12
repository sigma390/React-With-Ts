
import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context';

export default function Header() {

  // consume that context
  // const timerctx = useContext(TimersContext)!; one way
  //other way to avoid Null 
  const timerCtx = useTimersContext();
  return (
    <header>
      <h1>ReactTimer</h1>
      {/* accessing the functions satrt stop with onclick */}

      <Button onClick={timerCtx.isRunning? timerCtx.stopTimers: timerCtx.startTimers} >{timerCtx.isRunning?'Stop':'Start'}Timers</Button>  
    </header>
  );
}
